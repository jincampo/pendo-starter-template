import React, { useState } from 'react';
import { Code, Book, Play, Eye, EyeOff } from 'lucide-react';
import './ComponentShowcase.css';

// Tab component interface
interface TabsProps {
  tabs: Array<{id: string; label: string; icon?: React.ReactNode}>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: React.ReactNode;
}

const TabsComponent: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, children }) => {
  return (
    <div className="pendo-component-tabs">
      <div className="pendo-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`pendo-tab ${activeTab === tab.id ? 'pendo-tab--active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pendo-tab-content">
        {children}
      </div>
    </div>
  );
};

// Component data structure
interface ComponentInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  usage?: {
    whenToUse: string[];
    whenNotToUse: string[];
    anatomy?: Array<{element: string; description: string}>;
    accessibility?: string[];
    dosDonts?: {dos: string[]; donts: string[]};
  };
}

// Story data structure
interface ComponentStory {
  id: string;
  name: string;
  description: string;
  code: string;
  component: React.ReactNode;
}

// Usage Content Component
const UsageContent: React.FC<{ component: ComponentInfo }> = ({ component }) => {
  const { usage } = component;
  
  if (!usage) {
    return (
      <div className="pendo-usage-content">
        <p>No usage guidelines available for this component.</p>
      </div>
    );
  }

  return (
    <div className="pendo-usage-content">
      <div className="pendo-usage-section">
        <h3>Description</h3>
        <p>{component.description}</p>
      </div>

      <div className="pendo-usage-section">
        <h3>When to use</h3>
        <ul className="pendo-usage-list">
          {usage.whenToUse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="pendo-usage-section">
        <h3>When not to use</h3>
        <ul className="pendo-usage-list">
          {usage.whenNotToUse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {usage.anatomy && (
        <div className="pendo-usage-section">
          <h3>Anatomy</h3>
          <div className="pendo-anatomy-list">
            {usage.anatomy.map((item, index) => (
              <div key={index} className="pendo-anatomy-item">
                <strong>{item.element}:</strong> {item.description}
              </div>
            ))}
          </div>
        </div>
      )}

      {usage.accessibility && (
        <div className="pendo-usage-section">
          <h3>Accessibility</h3>
          <ul className="pendo-usage-list">
            {usage.accessibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {usage.dosDonts && (
        <div className="pendo-usage-section">
          <h3>Dos and Don'ts</h3>
          <div className="pendo-dos-donts">
            <div className="pendo-dos">
              <h4>✅ Do</h4>
              <ul>
                {usage.dosDonts.dos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pendo-donts">
              <h4>❌ Don't</h4>
              <ul>
                {usage.dosDonts.donts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Stories Content Component
const StoriesContent: React.FC<{ stories: ComponentStory[] }> = ({ stories }) => {
  const [showCode, setShowCode] = useState<{[key: string]: boolean}>({});

  const toggleCode = (storyId: string) => {
    setShowCode(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };

  return (
    <div className="pendo-stories-content">
      {stories.map(story => (
        <div key={story.id} className="pendo-story">
          <div className="pendo-story-header">
            <h3>{story.name}</h3>
            <p>{story.description}</p>
            <button
              className="pendo-code-toggle"
              onClick={() => toggleCode(story.id)}
            >
              {showCode[story.id] ? <EyeOff size={16} /> : <Eye size={16} />}
              {showCode[story.id] ? 'Hide Code' : 'Show Code'}
            </button>
          </div>
          
          <div className="pendo-story-example">
            {story.component}
          </div>
          
          {showCode[story.id] && (
            <div className="pendo-story-code">
              <pre><code>{story.code}</code></pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Code Content Component
const CodeContent: React.FC<{ stories: ComponentStory[]; propsTable?: React.ReactNode }> = ({ stories, propsTable }) => {
  return (
    <div className="pendo-code-content">
      <h3>Implementation Examples</h3>
      {stories.map(story => (
        <div key={story.id} className="pendo-code-example">
          <h4>{story.name}</h4>
          <pre><code>{story.code}</code></pre>
        </div>
      ))}
      
      {propsTable && (
        <div className="pendo-props-section">
          <h3>Props</h3>
          {propsTable}
        </div>
      )}
    </div>
  );
};

// Main Component Showcase Structure
interface ComponentShowcaseProps {
  component: ComponentInfo;
  stories: ComponentStory[];
  propsTable?: React.ReactNode;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ 
  component, 
  stories, 
  propsTable 
}) => {
  const [activeTab, setActiveTab] = useState('usage');

  const tabs = [
    { id: 'usage', label: 'Usage', icon: <Book size={16} /> },
    { id: 'stories', label: 'Stories', icon: <Play size={16} /> },
    { id: 'code', label: 'Code', icon: <Code size={16} /> }
  ];

  return (
    <div className="pendo-component-showcase">
      <div className="pendo-component-header">
        <h1>{component.name}</h1>
        <div className="pendo-component-meta">
          <span className="pendo-tag">{component.category}</span>
          <span className="pendo-tag pendo-tag--implemented">
            Implemented
          </span>
        </div>
        <p className="pendo-component-description">{component.description}</p>
      </div>

      <TabsComponent tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
        {activeTab === 'usage' && <UsageContent component={component} />}
        {activeTab === 'stories' && <StoriesContent stories={stories} />}
        {activeTab === 'code' && <CodeContent stories={stories} propsTable={propsTable} />}
      </TabsComponent>
    </div>
  );
};

export default ComponentShowcase;
export type { ComponentInfo, ComponentStory };
