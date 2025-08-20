import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { PrismPageLeftSide } from '@/components/PrismPageLeftSide';

type PageType =
  | 'home'
  | 'typography'
  | 'colors'
  | 'data-vis-colors'
  | 'buttons'
  | 'icons'
  | 'tags'
  | 'metrics'
  | 'page-headers'
  | 'page-templates'
  | 'cards'
  | 'dropdowns'
  | 'charts'
  | 'tables'
  | 'toggles'
  | 'checkboxes'
  | 'inputs'
  | 'navigation'
  | 'radios'
  | 'alerts'
  | 'modals'
  | 'wizard'
  | 'tooltips'
  | 'breadcrumbs'
  | 'tabs'
  | 'toast'
  | 'accordion'
  | 'progress'
  | 'divider'
  | 'radio-button-group'
  | 'time-picker'
  | 'date-picker'
  | 'color-picker'
  | 'ask-prism';

type TypographySectionType =
  | 'text-presets'
  | 'headings'
  | 'paragraphs'
  | 'metrics'
  | 'misc';

type ColorSectionType =
  | 'blue'
  | 'gray'
  | 'green'
  | 'lime'
  | 'magenta'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isColorsExpanded, setIsColorsExpanded] = useState(false);
  const [isTypographyExpanded, setIsTypographyExpanded] = useState(false);
  const [currentColorSection, setCurrentColorSection] = useState<ColorSectionType>('teal');
  const [currentTypographySection, setCurrentTypographySection] = useState<TypographySectionType>('text-presets');

  useEffect(() => {
    const path = location.pathname === '/' ? 'home' : location.pathname.split('/').pop()?.replace('-', '_');
    setCurrentPage(path as PageType);
  }, [location.pathname]);

  const handleColorClick = useCallback(() => {
    setCurrentPage('colors');
    setIsColorsExpanded(prev => !prev);
    navigate('/prism/colors');
  }, [navigate]);

  const handleTypographyClick = useCallback(() => {
    setCurrentPage('typography');
    setIsTypographyExpanded(prev => !prev);
    navigate('/prism/typography');
  }, [navigate]);

  const handleTypographySectionClick = useCallback((section: TypographySectionType) => {
    setCurrentTypographySection(section);
    setCurrentPage('typography');
    navigate('/prism/typography');
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [navigate]);

  const handleColorSectionClick = useCallback((section: ColorSectionType) => {
    setCurrentColorSection(section);
    setCurrentPage('colors');
    navigate('/prism/colors');
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [navigate]);

  return (
    <div className={currentPage === 'home' ? '' : 'app-layout'}>
      {currentPage !== 'home' && (
        <PrismPageLeftSide
          currentPage={currentPage}
        />
      )}
      <main className={location.pathname === '/' ? '' : 'main-content'}>
        <Outlet context={{ currentTypographySection, currentColorSection }} />
      </main>
    </div>
  );
}