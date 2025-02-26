import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';
import ScrollToTop from './components/floating/ScrollToTop';
import ScrollToTopButton from './components/floating/ScrollToTopButton';
import { CartProvider } from './components/context/CartContext';

function App() {

return (
<>
<CartProvider>
    <Router>
    <ScrollToTop/>
    <ScrollToTopButton />
    <RootRoutes/> 
    </Router> 
</CartProvider>
</>
  )
}

export default App
