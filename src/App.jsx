import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Community from './pages/Community'
import Impact from './pages/Impact'
import ReachAndPresence from './pages/Reach'
import CivicChanges from './pages/CivicChanges'
import Smilestones from './pages/Smilestones'
import GoodGovernence from './pages/GoodGovernance'
import Faq from './pages/Faq'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/our-story' element={<About />} />
          <Route path='/impact' element={<Impact />} />
          <Route path='/reach-presence' element={<ReachAndPresence />} />
          <Route path='/civic-driven-changes' element={<CivicChanges />} />
          <Route path='/smilestones' element={<Smilestones />} />
          <Route path='/good-governance' element={<GoodGovernence />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/community' element={<Community />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
