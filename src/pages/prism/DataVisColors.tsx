import '@/index.css'
import { useState } from 'react'
import { Tabs } from '@prism/tabs'

const baseColors = {
  blue: [
    { name: 'vis-blue-30', value: '#a2b7f0' },
    { name: 'vis-blue-60', value: '#7494e8' },
    { name: 'vis-blue-100', value: '#4570e0' },
    { name: 'vis-blue-120', value: '#1f4bbc' },
    { name: 'vis-blue-130', value: '#1e43a6' },
  ],
  purple: [
    { name: 'vis-purple-30', value: '#cfb5f9' },
    { name: 'vis-purple-60', value: '#a77af0' },
    { name: 'vis-purple-100', value: '#8852dc' },
    { name: 'vis-purple-120', value: '#6825d1' },
    { name: 'vis-purple-130', value: '#51209d' },
  ],
  magenta: [
    { name: 'vis-magenta-30', value: '#e5d036' },
    { name: 'vis-magenta-60', value: '#e192e0' },
    { name: 'vis-magenta-100', value: '#ca58c7' },
    { name: 'vis-magenta-120', value: '#982595' },
    { name: 'vis-magenta-130', value: '#791e77' },
  ],
  orange: [
    { name: 'vis-orange-30', value: '#ffddb3' },
    { name: 'vis-orange-60', value: '#fbb866' },
    { name: 'vis-orange-100', value: '#f59929' },
    { name: 'vis-orange-120', value: '#d77a0a' },
    { name: 'vis-orange-130', value: '#9f5800' },
  ],
  green: [
    { name: 'vis-green-30', value: '#bfdec6' },
    { name: 'vis-green-60', value: '#80bd8d' },
    { name: 'vis-green-100', value: '#56a667' },
    { name: 'vis-green-120', value: '#417d4d' },
    { name: 'vis-green-130', value: '#2b5334' },
  ],
  teal: [
    { name: 'vis-teal-30', value: '#b3e6f6' },
    { name: 'vis-teal-60', value: '#8ad4ec' },
    { name: 'vis-teal-100', value: '#4ab0d0' },
    { name: 'vis-teal-120', value: '#2c8aa8' },
    { name: 'vis-teal-130', value: '#135a71' },
  ],
  neutral: [
    { name: 'vis-neutral-30', value: '#f1f0f5' },
    { name: 'vis-neutral-60', value: '#dbd8e9' },
    { name: 'vis-neutral-100', value: '#c6c1db' },
    { name: 'vis-neutral-120', value: '#8a80b5' },
    { name: 'vis-neutral-130', value: '#564c82' },
  ],
}

const perceptiveColors = {
  nps: [
    { name: 'vis-nps-negative', value: '#FF4D1A' },
    { name: 'vis-nps-neutral', value: '#FFB31A' },
    { name: 'vis-nps-positive', value: '#1AEC65' },
  ],
  pcs: [
    { name: 'vis-pcs-primary', value: '#1A7B8C' },
    { name: 'vis-pcs-secondary', value: '#EC1A9D' },
    { name: 'vis-pcs-tertiary', value: '#651AEC' },
  ],
}

const categoricalSets = {
  setA: ['#51209d', '#e192e0', '#4570e0', '#f59929', '#4ab0d0', '#417d4d'],
  setB: ['#791e77', '#7494e8', '#d77a0a', '#8852dc', '#56a667', '#135a71'],
  setC: ['#4570e0', '#51209d', '#d77a0a', '#ca58c7', '#56a667', '#4ab0d0'],
  setD: ['#1e43a6', '#8852dc', '#e192e0', '#d77a0a', '#4ab0d0', '#80bd8d'],
}

const divergingSets = {
  setA: ['#2c8aa8', '#4ab0d0', '#8ad4ec', '#dbd8e9', '#e192e0', '#ca58c7', '#982595'],
  setB: ['#8825d1', '#8852dc', '#a77af0', '#dbd8e9', '#fbb866', '#f59929', '#d77a0a'],
  setC: ['#2c8aa8', '#4ab0d0', '#8ad4ec', '#dbd8e9', '#fbb866', '#f59929', '#d77a0a'],
  setD: ['#1f4bbc', '#4570e0', '#7494e8', '#dbd8e9', '#fbb866', '#f59929', '#d77a0a'],
  setE: ['#8825d1', '#8852dc', '#a77af0', '#dbd8e9', '#8ad4ec', '#4ab0d0', '#2c8aa8'],
  setF: ['#1f4bbc', '#4570e0', '#7494e8', '#dbd8e9', '#8ad4ec', '#4ab0d0', '#2c8aa8'],
  setG: ['#d77a0a', '#f59929', '#fbb866', '#dbd8e9', '#e192e0', '#ca58c7', '#982595'],
}

export default function DataVisColors() {
  const [activeTab, setActiveTab] = useState('base-scales')

  const tabs = [
    { id: 'base-scales', label: 'Base Scales' },
    { id: 'perceptive-palettes', label: 'Perceptive Palettes' },
    { id: 'diverging-sets', label: 'Diverging Color Sets' }
  ]

  const renderBaseScales = () => (
    <section>
      <h2>Base Color Scales</h2>
      <p className="description">Core color scales with consistent steps for various visualization needs.</p>
      <div className="space-y-8">
        {Object.entries(baseColors).map(([name, colors]) => (
          <div key={name}>
            <h3 className="capitalize mb-4">{name}</h3>
            <div className="color-grid">
              {colors.map(color => (
                <div key={color.name} className="color-item">
                  <div 
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="color-info">
                    <code className="color-name">{color.name}</code>
                    <code className="color-value">{color.value.toUpperCase()}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderPerceptivePalettes = () => (
    <section>
      <h2>Perceptive Palettes</h2>
      <p className="description">Color sets designed for specific use cases where color meaning is important.</p>
      <div className="space-y-8">
        {Object.entries(perceptiveColors).map(([name, colors]) => (
          <div key={name}>
            <h3 className="uppercase mb-4">{name}</h3>
            <div className="color-grid">
              {colors.map(color => (
                <div key={color.name} className="color-item">
                  <div 
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="color-info">
                    <code className="color-name">{color.name}</code>
                    <code className="color-value">{color.value.toUpperCase()}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3>Categorical Color Sets</h3>
        <p className="description">Predefined color combinations for categorical data visualization.</p>
        <div className="space-y-8">
          {Object.entries(categoricalSets).map(([name, colors]) => (
            <div key={name}>
              <h4 className="uppercase mb-4">{name}</h4>
              <div className="flex gap-4">
                {colors.map((color, index) => (
                  <div key={index} className="color-item" style={{ width: '100px' }}>
                    <div 
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                    />
                    <div className="color-info">
                      <code className="color-value">{color.toUpperCase()}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const renderDivergingSets = () => (
    <section>
      <h2>Diverging Color Sets</h2>
      <p className="description">Color scales that transition between two distinct colors through a neutral midpoint.</p>
      <div className="space-y-8">
        {Object.entries(divergingSets).map(([name, colors]) => (
          <div key={name}>
            <h3 className="uppercase mb-4">{name}</h3>
            <div className="flex gap-4">
              {colors.map((color, index) => (
                <div key={index} className="color-item" style={{ width: '100px' }}>
                  <div 
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  />
                  <div className="color-info">
                    <code className="color-value">{color.toUpperCase()}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'base-scales':
        return renderBaseScales()
      case 'perceptive-palettes':
        return renderPerceptivePalettes()
      case 'diverging-sets':
        return renderDivergingSets()
      default:
        return renderBaseScales()
    }
  }

  return (
    <div className="prism-preview">
      <h1 style={{ fontSize: 'var(--font-size-3xl, 30px)' }}>Data Visualization Colors</h1>
      <p className="description">
        Color palettes specifically designed for data visualization, ensuring clarity and accessibility 
        in charts, graphs, and other data representations.
      </p>
      
      {/* Tab Navigation */}
      <Tabs
        tabs={tabs.map(tab => ({
          id: tab.id,
          label: tab.label,
          content: <div></div> // Not used
        }))}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hideContent={true}
      />

      {/* Tab Content */}
      <div className="tab-content">
        {renderTabContent()}
      </div>

      <style>{`
        .tab-content {
          padding: 2rem 0;
        }

        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .color-item {
          border: 1px solid var(--color-gray-30);
          border-radius: 8px;
          overflow: hidden;
          background: white;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .color-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .color-swatch {
          height: 80px;
          width: 100%;
        }

        .color-info {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .color-name {
          font-size: 12px;
          color: var(--color-gray-70);
          background: var(--color-gray-10);
          padding: 2px 6px;
          border-radius: 3px;
        }

        .color-value {
          font-size: 14px;
          color: var(--color-gray-100);
          font-weight: 600;
        }

        .space-y-8 > * + * {
          margin-top: 2rem;
        }

        .capitalize {
          text-transform: capitalize;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-gray-100);
        }

        .uppercase {
          text-transform: uppercase;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-gray-100);
        }

        .flex {
          display: flex;
        }

        .gap-4 {
          gap: 1rem;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .mt-12 {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}