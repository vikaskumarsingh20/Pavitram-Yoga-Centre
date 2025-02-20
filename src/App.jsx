import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';
import Carousels from './components/Home/Carousel';
import LatestServices from './components/Home/LatestServices';
function App() {

  return (
    <>
    <Router>
      <RootRoutes/> 
    </Router> 

    <Carousels/>
    <LatestServices/>
    </>
  )
}

export default App
