import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';
import ScrollToTop from './components/floating/ScrollToTop';
import ScrollToTopButton from './components/floating/ScrollToTopButton';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';

function App() {

return (
<>
<CartProvider>
    <Router>
    <ScrollToTop/>
    <ScrollToTopButton />
    <AuthProvider>
    <RootRoutes/> 
    </AuthProvider>
    </Router> 
</CartProvider>
</>
  )
}

export default App
