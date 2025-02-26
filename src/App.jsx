import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';
import ScrollToTop from './components/floating/ScrollToTop';
import ScrollToTopButton from './components/floating/ScrollToTopButton';

function App() {

  return (
    <>
    <Router>
    <ScrollToTop/>
    <ScrollToTopButton />
      <RootRoutes/> 
    </Router> 
    </>
  )
}

export default App
