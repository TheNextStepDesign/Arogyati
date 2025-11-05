import './App.css'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './Pages/AllRoutes'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom';
import { NO_NAV_FOOTER_PATHS } from './lib/constants';

function App() {
  const location = useLocation();
  
  // Check if the current path is in the array of restricted paths
  const hideNavAndFooter = NO_NAV_FOOTER_PATHS.includes(location.pathname);
  return (
    <div className='p-0 font-sora' >
      
      {!hideNavAndFooter && <Navbar />}
      <AllRoutes/>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  )
}

export default App
