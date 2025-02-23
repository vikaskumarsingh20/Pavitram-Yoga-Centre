import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';

function App() {

  return (
    <>
    <Router>
      <RootRoutes/> 
    </Router> 
    </>
  )
}

export default App
