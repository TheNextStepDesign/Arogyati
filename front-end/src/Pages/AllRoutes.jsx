
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Services from './Services'
import Contact from './Contact'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Landing/>} />
        <Route  path='/Introduction' element={<Landing/>} />
        <Route  path='/about' element={<Landing/>} />
        <Route  path='/services' element={<Services/>} />
        <Route  path='/form' element={<Landing/>} />
        <Route  path='/testimonial' element={<Landing/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route  path='/terms-and-conditions' element={<TermsAndConditions/>} />
        
    </Routes>
  )
}

export default AllRoutes