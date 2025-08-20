import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import prismLogo from '@/assets/prism-logo.png'

type Page = 'home' | 'typography' | 'colors' | 'data-vis-colors' | 'buttons' | 'icons' | 'tags' | 'metrics' | 'page-headers' | 'page-templates' | 'cards' | 'hover-card' | 'dropdowns' | 'charts' | 'tables' | 'toggles' | 'checkboxes' | 'inputs' | 'navigation' | 'radios' | 'alerts' | 'modals' | 'wizard' | 'tooltips' | 'breadcrumbs' | 'tabs' | 'toast' | 'accordion' | 'progress' | 'divider' | 'radio-button-group' | 'time-picker' | 'date-picker' | 'color-picker' | 'ask-prism'

interface PrismPageLeftSideProps {
  currentPage: Page
}

interface NavigationItem {
  id: Page
  label: string
  route: string
  category: 'tokens' | 'components' | 'composites'
}

export function PrismPageLeftSide({
  currentPage
}: PrismPageLeftSideProps) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  // All navigation items in a searchable format
  const allNavigationItems: NavigationItem[] = [
    // Design Tokens
    { id: 'colors', label: 'Colors', route: '/prism/colors', category: 'tokens' },
    { id: 'data-vis-colors', label: 'Data Vis Colors', route: '/prism/data-vis-colors', category: 'tokens' },
    { id: 'typography', label: 'Typography', route: '/prism/typography', category: 'tokens' },
    
    // Components
    { id: 'accordion', label: 'Accordion', route: '/prism/accordion', category: 'components' },
    { id: 'alerts', label: 'Alerts', route: '/prism/alerts', category: 'components' },
    { id: 'breadcrumbs', label: 'Breadcrumbs', route: '/prism/breadcrumbs', category: 'components' },
    { id: 'buttons', label: 'Buttons', route: '/prism/buttons', category: 'components' },
    { id: 'cards', label: 'Cards', route: '/prism/cards', category: 'components' },
    { id: 'charts', label: 'Charts', route: '/prism/charts', category: 'components' },
    { id: 'checkboxes', label: 'Checkboxes', route: '/prism/checkboxes', category: 'components' },
    { id: 'color-picker', label: 'Color Picker', route: '/prism/color-picker', category: 'components' },
    { id: 'date-picker', label: 'Date Picker', route: '/prism/date-picker', category: 'components' },
    { id: 'divider', label: 'Divider', route: '/prism/divider', category: 'components' },
    { id: 'dropdowns', label: 'Dropdowns', route: '/prism/dropdowns', category: 'components' },
    { id: 'hover-card', label: 'Hover Card', route: '/prism/hover-card', category: 'components' },
    { id: 'icons', label: 'Icons', route: '/prism/icons', category: 'components' },
    { id: 'inputs', label: 'Inputs', route: '/prism/inputs', category: 'components' },
    { id: 'metrics', label: 'Metrics', route: '/prism/metrics', category: 'components' },
    { id: 'modals', label: 'Modals', route: '/prism/modals', category: 'components' },
    { id: 'navigation', label: 'Navigation', route: '/prism/navigation', category: 'components' },
    { id: 'page-headers', label: 'Page Headers', route: '/prism/page-headers', category: 'components' },
    { id: 'progress', label: 'Progress', route: '/prism/progress', category: 'components' },
    { id: 'radio-button-group', label: 'Radio Button Group', route: '/prism/radio-button-group', category: 'components' },
    { id: 'radios', label: 'Radio Buttons', route: '/prism/radios', category: 'components' },
    { id: 'tables', label: 'Tables', route: '/prism/tables', category: 'components' },
    { id: 'tabs', label: 'Tabs', route: '/prism/tabs', category: 'components' },
    { id: 'tags', label: 'Tags', route: '/prism/tags', category: 'components' },
    { id: 'time-picker', label: 'Time Picker', route: '/prism/time-picker', category: 'components' },
    { id: 'toast', label: 'Toast', route: '/prism/toast', category: 'components' },
    { id: 'toggles', label: 'Toggles', route: '/prism/toggles', category: 'components' },
    { id: 'tooltips', label: 'Tooltips', route: '/prism/tooltips', category: 'components' },
    { id: 'wizard', label: 'Wizard', route: '/prism/wizard', category: 'components' },
    
    // Composites
    { id: 'page-templates', label: 'Page Templates', route: '/prism/page-templates', category: 'composites' },
  ]

  // Filter items based on search query
  const filteredItems = searchQuery.trim()
    ? allNavigationItems.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className="nav-sidebar bg-[var(--color-gray-10)] border-r border-[var(--color-gray-40)]">
      <div className="px-8 pt-4 pb-4">
        <img 
          src={prismLogo} 
          alt="Prism Design System" 
          className="w-auto" 
          style={{ height: '120px' }}
        />
      </div>
      
      {/* Ask Prism Button */}
      <div className="px-4 pb-4">
        <button
          onClick={() => navigate('/prism/ask-prism')}
          className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[var(--color-teal-70)] to-[var(--color-teal-80)] text-white rounded-lg hover:from-[var(--color-teal-80)] hover:to-[var(--color-teal-90)] transition-all duration-200 shadow-sm hover:shadow-md group"
        >
          <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium text-sm">Ask Prism</div>
            <div className="text-xs text-white/80">Get AI-powered component recommendations</div>
          </div>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-white/60 group-hover:text-white/80 transition-colors"
          >
            <path d="9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search components..."
            className="w-full px-3 py-2 pr-8 text-sm border border-[var(--color-gray-40)] rounded-md bg-white focus:outline-none focus:border-[var(--color-teal-70)] focus:ring-1 focus:ring-[var(--color-teal-70)]"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--color-gray-60)] hover:text-[var(--color-gray-100)] focus:outline-none"
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="15 9l-6 6"/>
                <path d="9 9l6 6"/>
              </svg>
            </button>
          )}
          {!searchQuery && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--color-gray-50)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="21 21l-4.35-4.35"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      {/* Conditional rendering: Search results or normal navigation */}
      {searchQuery.trim() ? (
        // Search Results
        <div className="px-4">
          {filteredItems.length > 0 ? (
            <ul className="space-y-1">
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={`nav-item flex items-center gap-2 ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => {
                    navigate(item.route)
                    setSearchQuery('') // Clear search on navigation
                  }}
                >
                  <div className="w-4 h-4 border border-[var(--color-gray-50)] bg-[var(--color-gray-20)] rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-[var(--color-gray-60)] rounded-xs"></div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-[var(--color-gray-60)] capitalize">{item.category}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-[var(--color-gray-60)] text-sm px-4 py-8 text-center">
              No components found for "{searchQuery}"
            </div>
          )}
        </div>
      ) : (
        // Normal categorized navigation
        <div>
          <h1 className="!mt-0">Design Tokens</h1>
          <ul className="nav-list">          
            <li 
              className={`nav-item ${currentPage === 'colors' ? 'active' : ''}`}
              onClick={() => navigate('/prism/colors')}
            >
              Colors
            </li>
            <li 
              className={`nav-item ${currentPage === 'data-vis-colors' ? 'active' : ''}`}
              onClick={() => navigate('/prism/data-vis-colors')}
            >
              Data Vis Colors
            </li>
            <li 
              className={`nav-item ${currentPage === 'typography' ? 'active' : ''}`}
              onClick={() => navigate('/prism/typography')}
            >
              Typography
            </li>
          </ul>
          
          <h1>Components</h1>
          <ul className="nav-list">
            <li 
              className={`nav-item ${currentPage === 'accordion' ? 'active' : ''}`}
              onClick={() => navigate('/prism/accordion')}
            >
              Accordion
            </li>
            <li 
              className={`nav-item ${currentPage === 'alerts' ? 'active' : ''}`}
              onClick={() => navigate('/prism/alerts')}
            >
              Alerts
            </li>
            <li 
              className={`nav-item ${currentPage === 'breadcrumbs' ? 'active' : ''}`}
              onClick={() => navigate('/prism/breadcrumbs')}
            >
              Breadcrumbs
            </li>
            <li 
              className={`nav-item ${currentPage === 'buttons' ? 'active' : ''}`}
              onClick={() => navigate('/prism/buttons')}
            >
              Buttons
            </li>
            <li 
              className={`nav-item ${currentPage === 'cards' ? 'active' : ''}`}
              onClick={() => navigate('/prism/cards')}
            >
              Cards
            </li>
            <li 
              className={`nav-item ${currentPage === 'charts' ? 'active' : ''}`}
              onClick={() => navigate('/prism/charts')}
            >
              Charts
            </li>
            <li 
              className={`nav-item ${currentPage === 'checkboxes' ? 'active' : ''}`}
              onClick={() => navigate('/prism/checkboxes')}
            >
              Checkboxes
            </li>
            <li 
              className={`nav-item ${currentPage === 'color-picker' ? 'active' : ''}`}
              onClick={() => navigate('/prism/color-picker')}
            >
              Color Picker
            </li>
            <li 
              className={`nav-item ${currentPage === 'date-picker' ? 'active' : ''}`}
              onClick={() => navigate('/prism/date-picker')}
            >
              Date Picker
            </li>
            <li 
              className={`nav-item ${currentPage === 'divider' ? 'active' : ''}`}
              onClick={() => navigate('/prism/divider')}
            >
              Divider
            </li>
            <li 
              className={`nav-item ${currentPage === 'dropdowns' ? 'active' : ''}`}
              onClick={() => navigate('/prism/dropdowns')}
            >
              Dropdowns
            </li>
            <li 
              className={`nav-item ${currentPage === 'hover-card' ? 'active' : ''}`}
              onClick={() => navigate('/prism/hover-card')}
            >
              Hover Card
            </li>
            <li 
              className={`nav-item ${currentPage === 'icons' ? 'active' : ''}`}
              onClick={() => navigate('/prism/icons')}
            >
              Icons
            </li>
            <li 
              className={`nav-item ${currentPage === 'inputs' ? 'active' : ''}`}
              onClick={() => navigate('/prism/inputs')}
            >
              Inputs
            </li>
            <li 
              className={`nav-item ${currentPage === 'metrics' ? 'active' : ''}`}
              onClick={() => navigate('/prism/metrics')}
            >
              Metrics
            </li>
            <li 
              className={`nav-item ${currentPage === 'modals' ? 'active' : ''}`}
              onClick={() => navigate('/prism/modals')}
            >
              Modals
            </li>
            <li 
              className={`nav-item ${currentPage === 'navigation' ? 'active' : ''}`}
              onClick={() => navigate('/prism/navigation')}
            >
              Navigation
            </li>
            <li 
              className={`nav-item ${currentPage === 'page-headers' ? 'active' : ''}`}
              onClick={() => navigate('/prism/page-headers')}
            >
              Page Headers
            </li>
            <li 
              className={`nav-item ${currentPage === 'progress' ? 'active' : ''}`}
              onClick={() => navigate('/prism/progress')}
            >
              Progress
            </li>
            <li 
              className={`nav-item ${currentPage === 'radio-button-group' ? 'active' : ''}`}
              onClick={() => navigate('/prism/radio-button-group')}
            >
              Radio Button Group
            </li>
            <li 
              className={`nav-item ${currentPage === 'radios' ? 'active' : ''}`}
              onClick={() => navigate('/prism/radios')}
            >
              Radio Buttons
            </li>
            <li 
              className={`nav-item ${currentPage === 'tables' ? 'active' : ''}`}
              onClick={() => navigate('/prism/tables')}
            >
              Tables
            </li>
            <li 
              className={`nav-item ${currentPage === 'tabs' ? 'active' : ''}`}
              onClick={() => navigate('/prism/tabs')}
            >
              Tabs
            </li>
            <li 
              className={`nav-item ${currentPage === 'tags' ? 'active' : ''}`}
              onClick={() => navigate('/prism/tags')}
            >
              Tags
            </li>
            <li 
              className={`nav-item ${currentPage === 'time-picker' ? 'active' : ''}`}
              onClick={() => navigate('/prism/time-picker')}
            >
              Time Picker
            </li>
            <li 
              className={`nav-item ${currentPage === 'toast' ? 'active' : ''}`}
              onClick={() => navigate('/prism/toast')}
            >
              Toast
            </li>
            <li 
              className={`nav-item ${currentPage === 'toggles' ? 'active' : ''}`}
              onClick={() => navigate('/prism/toggles')}
            >
              Toggles
            </li>
            <li 
              className={`nav-item ${currentPage === 'tooltips' ? 'active' : ''}`}
              onClick={() => navigate('/prism/tooltips')}
            >
              Tooltips
            </li>
            <li 
              className={`nav-item ${currentPage === 'wizard' ? 'active' : ''}`}
              onClick={() => navigate('/prism/wizard')}
            >
              Wizard
            </li>
          </ul>
          
          <h1>Composites</h1>
          <ul className="nav-list">
            <li 
              className={`nav-item ${currentPage === 'page-templates' ? 'active' : ''}`}
              onClick={() => navigate('/prism/page-templates')}
            >
              Page Templates
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}