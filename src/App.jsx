import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlanPage from './pages/PlanPage'
import WebDesignPage from './pages/WebDesignPage'
import LogoPage from './pages/LogoPage'
import GraphicDesignPage from './pages/GraphicDesignPage'
import FontPage from './pages/FontPage'
import IlluPage from './pages/IlluPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/logo" element={<LogoPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/font" element={<FontPage />} />
        <Route path="/illu" element={<IlluPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
