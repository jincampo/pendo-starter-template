import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@prism/icon';
import { Button } from '@prism/button';

interface ComponentSuggestion {
  name: string;
  description: string;
  route: string;
  category: string;
  useCase: string;
}

// Component knowledge base for suggestions
const componentDatabase: ComponentSuggestion[] = [
  {
    name: 'Buttons',
    description: 'Interactive elements for user actions',
    route: '/prism/buttons',
    category: 'Components',
    useCase: 'actions, submit, cancel, navigation'
  },
  {
    name: 'Cards',
    description: 'Container for related content and actions',
    route: '/prism/cards',
    category: 'Components',
    useCase: 'content grouping, information display, dashboard'
  },
  {
    name: 'Modal',
    description: 'Overlay dialog for focused interactions',
    route: '/prism/modals',
    category: 'Components',
    useCase: 'confirmation, forms, details, interruption'
  },
  {
    name: 'Wizard',
    description: 'Multi-step process with guided navigation',
    route: '/prism/wizard',
    category: 'Components',
    useCase: 'setup, onboarding, complex forms, multi-step'
  },
  {
    name: 'Tables',
    description: 'Structured data display with sorting and filtering',
    route: '/prism/tables',
    category: 'Components',
    useCase: 'data display, lists, comparison, analytics'
  },
  {
    name: 'Dropdowns',
    description: 'Selection from a list of options',
    route: '/prism/dropdowns',
    category: 'Components',
    useCase: 'selection, menus, filters, navigation'
  },
  {
    name: 'Inputs',
    description: 'Text entry and form fields',
    route: '/prism/inputs',
    category: 'Components',
    useCase: 'forms, text entry, search, data input'
  },
  {
    name: 'Alerts',
    description: 'Important notifications and messages',
    route: '/prism/alerts',
    category: 'Components',
    useCase: 'notifications, warnings, errors, success messages'
  },
  {
    name: 'Toast',
    description: 'Temporary notification messages',
    route: '/prism/toast',
    category: 'Components',
    useCase: 'feedback, notifications, status updates'
  },
  {
    name: 'Charts',
    description: 'Data visualization components',
    route: '/prism/charts',
    category: 'Components',
    useCase: 'analytics, data visualization, metrics, trends'
  },
  {
    name: 'Progress',
    description: 'Progress indicators and loading states',
    route: '/prism/progress',
    category: 'Components',
    useCase: 'loading, progress tracking, completion status'
  },
  {
    name: 'Accordion',
    description: 'Collapsible content sections',
    route: '/prism/accordion',
    category: 'Components',
    useCase: 'content organization, FAQ, space saving'
  }
];

// Sample questions to get users started
const sampleQuestions = [
  "What should I use for forms?",
  "How do I display data in tables?", 
  "I need a multi-step workflow",
  "What's best for user feedback?",
  "How do I show progress to users?",
  "What components help with navigation?"
];

// Simple keyword matching for component suggestions
const findRelevantComponents = (query: string): ComponentSuggestion[] => {
  if (!query.trim()) return [];
  
  const keywords = query.toLowerCase().split(' ');
  const matches: { component: ComponentSuggestion; score: number }[] = [];

  componentDatabase.forEach(component => {
    let score = 0;
    const searchText = `${component.name} ${component.description} ${component.useCase}`.toLowerCase();
    
    keywords.forEach(keyword => {
      if (searchText.includes(keyword)) {
        score += 1;
        // Boost score for exact name matches
        if (component.name.toLowerCase().includes(keyword)) {
          score += 2;
        }
      }
    });

    if (score > 0) {
      matches.push({ component, score });
    }
  });

  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(match => match.component);
};

const AskPrism: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ComponentSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Simulate loading time like in the Figma design
    setTimeout(() => {
      const results = findRelevantComponents(query);
      setSuggestions(results);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleQuestionClick = (question: string) => {
    setQuery(question);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--color-gray-30)] px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-teal-70)] rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size="small" className="text-white" />
            </div>
            <h1 className="text-lg font-medium text-[var(--color-text-primary)] !m-0">Prism Design System</h1>
          </div>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size="small" />
            Back
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl font-semibold text-[var(--color-text-primary)] !m-0">
              Ask Prism
            </h1>
            <span className="px-2 py-1 text-xs font-medium bg-[var(--color-teal-70)] text-white rounded-md">
              Beta
            </span>
          </div>
          <p className="text-[var(--color-gray-70)] text-lg !m-0">
            Get recommendations for the right components to use in your design.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-white rounded-lg border border-[var(--color-gray-30)] shadow-sm mb-8">
          <div className="p-6">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What kind of component do you need? (e.g., 'I need something for user feedback')"
              className="w-full min-h-[80px] text-base border-0 resize-none focus:outline-none placeholder-[var(--color-gray-50)]"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--color-gray-20)] bg-[var(--color-gray-5)]">
            <div className="flex items-center gap-2">
              <Icon name="Filter" size="small" className="text-[var(--color-teal-70)]" />
              <span className="text-sm text-[var(--color-teal-70)] font-medium">
                Select a component category
              </span>
            </div>
            
            <Button
              onClick={handleGenerate}
              disabled={!query.trim() || isLoading}
              variant="primary"
              size="default"
              className="min-w-[100px]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Thinking...
                </div>
              ) : (
                'Generate'
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {suggestions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 !m-0 !mb-4">
              Recommended Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => navigate(suggestion.route)}
                  className="text-left p-4 bg-white border border-[var(--color-gray-30)] rounded-lg hover:border-[var(--color-teal-70)] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-[var(--color-text-primary)] mb-1 !m-0 !mb-1 group-hover:text-[var(--color-teal-80)]">
                        {suggestion.name}
                      </h4>
                      <p className="text-sm text-[var(--color-gray-70)] !m-0 leading-relaxed">
                        {suggestion.description}
                      </p>
                      <div className="mt-2">
                        <span className="text-xs text-[var(--color-gray-50)] bg-[var(--color-gray-10)] px-2 py-1 rounded">
                          {suggestion.category}
                        </span>
                      </div>
                    </div>
                    <Icon 
                      name="ArrowRight" 
                      size="small" 
                      className="text-[var(--color-gray-40)] group-hover:text-[var(--color-teal-70)] transition-colors flex-shrink-0 mt-1" 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sample Questions */}
        <div>
          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 !m-0 !mb-4">
            Try asking about
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="text-left p-4 bg-white border border-[var(--color-gray-30)] rounded-lg hover:border-[var(--color-gray-50)] hover:bg-[var(--color-gray-5)] transition-all"
              >
                <p className="text-sm text-[var(--color-gray-80)] !m-0">
                  {question}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskPrism;