import '@/index.css'
import { useState } from 'react'
import { Tabs } from '@prism/tabs'

export default function Colors() {
  const [activeTab, setActiveTab] = useState('blue')

  const colorFamilies = {
    blue: [
      { name: 'blue-5', value: '#f1fbfe' },
      { name: 'blue-10', value: '#e2f0ff' },
      { name: 'blue-20', value: '#bdddff' },
      { name: 'blue-30', value: '#88c2ff' },
      { name: 'blue-40', value: '#53afff' },
      { name: 'blue-50', value: '#3aa6ec' },
      { name: 'blue-60', value: '#0b9ad3' },
      { name: 'blue-70', value: '#028cc2' },
      { name: 'blue-80', value: '#0182b6' },
      { name: 'blue-90', value: '#07699b' },
      { name: 'blue-100', value: '#094b7c' },
      { name: 'blue-110', value: '#062f5f' },
      { name: 'blue-120', value: '#022144' }
    ],
    gray: [
      { name: 'gray-0', value: '#ffffff' },
      { name: 'gray-10', value: '#f8f8f9' },
      { name: 'gray-20', value: '#f4f4f7' },
      { name: 'gray-30', value: '#eaecf1' },
      { name: 'gray-40', value: '#dadce5' },
      { name: 'gray-50', value: '#babcc5' },
      { name: 'gray-60', value: '#9a9ca5' },
      { name: 'gray-70', value: '#6a6c75' },
      { name: 'gray-80', value: '#4a4c55' },
      { name: 'gray-90', value: '#3a3c45' },
      { name: 'gray-100', value: '#2a2c35' },
      { name: 'gray-110', value: '#1a1c25' }
    ],
    green: [
      { name: 'green-10', value: '#e3f7ed' },
      { name: 'green-20', value: '#c7eddb' },
      { name: 'green-30', value: '#8dddb6' },
      { name: 'green-40', value: '#55d099' },
      { name: 'green-50', value: '#00c583' },
      { name: 'green-60', value: '#00ba6d' },
      { name: 'green-70', value: '#00aa62' },
      { name: 'green-80', value: '#009855' },
      { name: 'green-90', value: '#008648' },
      { name: 'green-100', value: '#006632' },
      { name: 'green-110', value: '#005027' },
      { name: 'green-120', value: '#00391c' }
    ],
    lime: [
      { name: 'lime-10', value: '#ebfae6' },
      { name: 'lime-20', value: '#d5f5cc' },
      { name: 'lime-30', value: '#bbe399' },
      { name: 'lime-40', value: '#a2d066' },
      { name: 'lime-50', value: '#8abd33' },
      { name: 'lime-60', value: '#7daa00' },
      { name: 'lime-70', value: '#729900' },
      { name: 'lime-80', value: '#668800' },
      { name: 'lime-90', value: '#5a7700' },
      { name: 'lime-100', value: '#4e6600' },
      { name: 'lime-110', value: '#425500' },
      { name: 'lime-120', value: '#364400' }
    ],
    magenta: [
      { name: 'magenta-10', value: '#f9e7f4' },
      { name: 'magenta-20', value: '#f3cfe9' },
      { name: 'magenta-30', value: '#e6a0d3' },
      { name: 'magenta-40', value: '#da70bd' },
      { name: 'magenta-50', value: '#cd41a7' },
      { name: 'magenta-60', value: '#c11191' },
      { name: 'magenta-70', value: '#ad0f84' },
      { name: 'magenta-80', value: '#990d77' },
      { name: 'magenta-90', value: '#850b69' },
      { name: 'magenta-100', value: '#71095c' },
      { name: 'magenta-110', value: '#5d074e' },
      { name: 'magenta-120', value: '#490541' }
    ],
    orange: [
      { name: 'orange-10', value: '#fef0e6' },
      { name: 'orange-20', value: '#fce0cc' },
      { name: 'orange-30', value: '#f8c299' },
      { name: 'orange-40', value: '#f4a366' },
      { name: 'orange-50', value: '#f08533' },
      { name: 'orange-60', value: '#ec6600' },
      { name: 'orange-70', value: '#d35c00' },
      { name: 'orange-80', value: '#ba5200' },
      { name: 'orange-90', value: '#a14800' },
      { name: 'orange-100', value: '#883e00' },
      { name: 'orange-110', value: '#6f3400' },
      { name: 'orange-120', value: '#562a00' }
    ],
    pink: [
      { name: 'pink-10', value: '#ffe9f2' },
      { name: 'pink-20', value: '#ffd3e5' },
      { name: 'pink-30', value: '#ffa6cb' },
      { name: 'pink-40', value: '#ff7ab1' },
      { name: 'pink-50', value: '#ff4d97' },
      { name: 'pink-60', value: '#ff217d' },
      { name: 'pink-70', value: '#e61e71' },
      { name: 'pink-80', value: '#cc1b65' },
      { name: 'pink-90', value: '#b31859' },
      { name: 'pink-100', value: '#99154d' },
      { name: 'pink-110', value: '#801241' },
      { name: 'pink-120', value: '#660f35' }
    ],
    purple: [
      { name: 'purple-10', value: '#f2e9ff' },
      { name: 'purple-20', value: '#e5d3ff' },
      { name: 'purple-30', value: '#cba6ff' },
      { name: 'purple-40', value: '#b17aff' },
      { name: 'purple-50', value: '#974dff' },
      { name: 'purple-60', value: '#7d21ff' },
      { name: 'purple-70', value: '#711ee6' },
      { name: 'purple-80', value: '#651bcc' },
      { name: 'purple-90', value: '#5918b3' },
      { name: 'purple-100', value: '#4d1599' },
      { name: 'purple-110', value: '#411280' },
      { name: 'purple-120', value: '#350f66' }
    ],
    red: [
      { name: 'red-10', value: '#ffebea' },
      { name: 'red-20', value: '#ffd7d5' },
      { name: 'red-30', value: '#ffafab' },
      { name: 'red-40', value: '#ff8781' },
      { name: 'red-50', value: '#ff5f57' },
      { name: 'red-60', value: '#ff372d' },
      { name: 'red-70', value: '#e63129' },
      { name: 'red-80', value: '#cc2b25' },
      { name: 'red-90', value: '#b32521' },
      { name: 'red-100', value: '#991f1d' },
      { name: 'red-110', value: '#801919' },
      { name: 'red-120', value: '#661315' }
    ],
    teal: [
      { name: 'teal-5', value: '#f0fcfd' },
      { name: 'teal-10', value: '#e1f9fb' },
      { name: 'teal-20', value: '#c3f3f7' },
      { name: 'teal-30', value: '#85e3eb' },
      { name: 'teal-40', value: '#47d3df' },
      { name: 'teal-50', value: '#29c7d7' },
      { name: 'teal-60', value: '#128297' },
      { name: 'teal-70', value: '#016479' },
      { name: 'teal-80', value: '#014d5e' },
      { name: 'teal-90', value: '#013943' },
      { name: 'teal-100', value: '#012528' },
      { name: 'teal-110', value: '#00131a' },
      { name: 'teal-120', value: '#00090d' }
    ],
    yellow: [
      { name: 'yellow-10', value: '#fff8e1' },
      { name: 'yellow-20', value: '#fff1c4' },
      { name: 'yellow-30', value: '#ffe388' },
      { name: 'yellow-40', value: '#ffd54c' },
      { name: 'yellow-50', value: '#ffc710' },
      { name: 'yellow-60', value: '#d4a500' },
      { name: 'yellow-70', value: '#b88e00' },
      { name: 'yellow-80', value: '#9c7700' },
      { name: 'yellow-90', value: '#806000' },
      { name: 'yellow-100', value: '#644900' },
      { name: 'yellow-110', value: '#483200' },
      { name: 'yellow-120', value: '#2c1b00' }
    ]
  }

  const tabs = [
    { id: 'blue', label: 'Blue' },
    { id: 'gray', label: 'Gray' },
    { id: 'green', label: 'Green' },
    { id: 'lime', label: 'Lime' },
    { id: 'magenta', label: 'Magenta' },
    { id: 'orange', label: 'Orange' },
    { id: 'pink', label: 'Pink' },
    { id: 'purple', label: 'Purple' },
    { id: 'red', label: 'Red' },
    { id: 'teal', label: 'Teal' },
    { id: 'yellow', label: 'Yellow' }
  ]

  const renderColorPalette = (colors: Array<{name: string, value: string}>, title: string) => (
    <div className="color-family">
      <h2 className="color-family-title">{title}</h2>
      <div className="color-grid">
        {colors.map((color) => (
          <div key={color.name} className="color-swatch">
            <div 
              className="color-preview" 
              style={{ backgroundColor: color.value }}
              title={`${color.name}: ${color.value}`}
            />
            <div className="color-info">
              <div className="color-name">{color.name}</div>
              <div className="color-value">{color.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="prism-preview">
      <h1>Color System</h1>
      <p className="description">
        A comprehensive color palette designed for consistency and accessibility. Each color family 
        includes carefully crafted shades that work harmoniously together and meet WCAG contrast requirements.
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
        {renderColorPalette(
          colorFamilies[activeTab as keyof typeof colorFamilies], 
          tabs.find(tab => tab.id === activeTab)?.label || ''
        )}
      </div>

      <style>{`
        .tab-content {
          padding: 2rem 0;
        }

        .color-family-title {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-gray-100);
          text-transform: capitalize;
        }

        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1rem;
        }

        .color-swatch {
          border: 1px solid var(--color-gray-30);
          border-radius: 4px;
          overflow: hidden;
          background: white;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .color-swatch:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .color-preview {
          height: 80px;
          width: 100%;
          cursor: pointer;
        }

        .color-info {
          padding: 12px;
        }

        .color-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--color-gray-100);
          margin-bottom: 4px;
        }

        .color-value {
          font-family: monospace;
          font-size: 12px;
          color: var(--color-gray-70);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}