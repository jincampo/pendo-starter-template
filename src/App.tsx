import './App.css'
import Typography from './pages/prism/Typography'
import Colors from './pages/prism/Colors'
import Buttons from './pages/prism/Buttons'
import Tags from './pages/prism/Tags'
import Metrics from './pages/prism/Metrics'
import Home from './pages/Home'
import PageHeaders from './pages/prism/PageHeader'
import Icons from './pages/prism/Icons'
import NavigationDemo from './pages/prism/Navigation'
import Cards from './pages/prism/Cards'
import DataVisColors from './pages/prism/DataVisColors'
import Charts from './pages/prism/Charts'
import Tables from './pages/prism/Tables' 
import Dropdowns from './pages/prism/Dropdowns' 
import Toggles from './pages/prism/Toggles'
import Checkboxes from './pages/prism/Checkboxes'
import Inputs from './pages/prism/Inputs'
import Radios from './pages/prism/Radios'
import PageTemplates from './pages/prism/PageTemplate'
import HoverCard from './pages/prism/HoverCard'
import Alerts from './pages/prism/Alerts'
import Modals from './pages/prism/Modals'
import WizardPage from './pages/prism/Wizard'
import Tooltips from './pages/prism/Tooltips'
import Breadcrumbs from './pages/prism/Breadcrumbs'
import TabsPage from './pages/prism/Tabs'
import ToastPage from './pages/prism/Toast'
import RadioButtonGroupPage from './pages/prism/RadioButtonGroup'
import TimePickerPage from './pages/prism/TimePicker'
import DatePickerPage from './pages/prism/DatePicker'
import ColorPickerPage from './pages/prism/ColorPicker'
import DividerPage from './pages/prism/Divider'
import AccordionPage from './pages/prism/Accordion'
import ProgressPage from './pages/prism/Progress'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/prism/Layout'
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}> 
          <Route path="/prism" element={<Navigate to="/prism/typography" replace />} />
          <Route path="/prism/typography" element={<Typography />} />
          <Route path="/prism/colors" element={<Colors />} />
          <Route path="/prism/data-vis-colors" element={<DataVisColors />} />
          <Route path="/prism/buttons" element={<Buttons />} />
          <Route path="/prism/icons" element={<Icons />} />
          <Route path="/prism/page-headers" element={<PageHeaders />} />
          <Route path="/prism/tags" element={<Tags />} />
          <Route path="/prism/metrics" element={<Metrics />} />
          <Route path="/prism/cards" element={<Cards />} />
          <Route path="/prism/hover-card" element={<HoverCard />} />
          <Route path="/prism/charts" element={<Charts />} />
          <Route path="/prism/tables" element={<Tables />} />
          <Route path="/prism/toggles" element={<Toggles />} />
          <Route path="/prism/dropdowns" element={<Dropdowns />} />
          <Route path="/prism/checkboxes" element={<Checkboxes />} />
          <Route path="/prism/radios" element={<Radios />} />
          <Route path="/prism/inputs" element={<Inputs />} />
          <Route path="/prism/navigation" element={<NavigationDemo />} />
          <Route path="/prism/page-templates" element={<PageTemplates />} />
          <Route path="/prism/alerts" element={<Alerts />} />
          <Route path="/prism/modals" element={<Modals />} />
          <Route path="/prism/wizard" element={<WizardPage />} />
          <Route path="/prism/tooltips" element={<Tooltips />} />
          <Route path="/prism/breadcrumbs" element={<Breadcrumbs />} />
          <Route path="/prism/tabs" element={<TabsPage />} />
          <Route path="/prism/toast" element={<ToastPage />} />
          <Route path="/prism/radio-button-group" element={<RadioButtonGroupPage />} />
          <Route path="/prism/time-picker" element={<TimePickerPage />} />
          <Route path="/prism/date-picker" element={<DatePickerPage />} />
          <Route path="/prism/color-picker" element={<ColorPickerPage />} />
          <Route path="/prism/divider" element={<DividerPage />} />
          <Route path="/prism/accordion" element={<AccordionPage />} />
          <Route path="/prism/progress" element={<ProgressPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App