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
import Education from './pages/Eductaion'
import Healthcare from './pages/Healthcare'
import Livelihood from './pages/Livelihood'
import WomenEmpowerment from './pages/WomenEmpowerment'
import DisasterResponse from './pages/DisasterResponse'
import ChildForChild from './pages/ChildForChild'
import IndividualSupport from './pages/IndividualSupport'
import CorporateRespons from './pages/CorporateRespons'
import CauseMarket from './pages/CauseMarket'
import EmployeeManage from './pages/EmployeeManage'
import PayrollGiv from './pages/PayrollGiv'
import SchoolPartnership from './pages/SchoolPartnership'
import Volunteers from './pages/Volunteers'
import WorkWithUs from './pages/WorkWithUs.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
         <Route path='/about-us' element={<About />} />
          {/* <Route path='/impact' element={<Impact />} />
          <Route path='/reach-presence' element={<ReachAndPresence />} />
          <Route path='/civic-driven-changes' element={<CivicChanges />} />
          <Route path='/smilestones' element={<Smilestones />} />
          <Route path='/good-governance' element={<GoodGovernence />} />
          <Route path = '/education' element={<Education /> } />
          <Route path = '/healthcare' element={<Healthcare /> } />
          <Route path = '/livelihood' element={<Livelihood /> } />
          <Route path = '/women-empowerment' element={<WomenEmpowerment /> } />
          <Route path = '/disaster-response' element={<DisasterResponse /> } />
          <Route path='/child-for-child' element={<ChildForChild />} />
          <Route path='/individual-support' element={<IndividualSupport />} />
          <Route path='/corporate-social-responsibility' element={<CorporateRespons />} />
          <Route path='/cause-marketing-and-events' element={<CauseMarket />} />
          <Route path='/employee-engagement' element={<EmployeeManage/>} />
          <Route path='/payroll-giving' element={<PayrollGiv />} />
          <Route path='/school-partnership' element={<SchoolPartnership />} />
          <Route path='/volunteers-and-internship' element={<Volunteers />} />
          <Route path='/work-with-us' element={<WorkWithUs />} /> */}
          <Route path='/contact-us' element={<Contact />} />
          {/* <Route path='/faq' element={<Faq />} />
          <Route path='/community' element={<Community />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
