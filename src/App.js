import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from './Component/Homepage';
import About from './Component/About';
import Careers from './Component/Careers';
import Events from './Component/Events';
import Products from './Component/Products';
import Support from './Component/Support';

function App() {
  return (
    <div className="App">
      <div className="cover">
        <div className="loop">
        <Link to="/" className="home">loopstudios</Link>
        </div>
        <nav className="nav">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/careers" className="nav-item">Careers</Link>
          <Link to="/events" className="nav-item">Events</Link>
          <Link to="/products" className="nav-item">Products</Link>
          <Link yo="/support" className="nav-item">Support</Link>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/events' element={<Events />} />
        <Route path='/products' element={<Products />} />
        <Route path='/support' element={<Support />} />
      </Routes>

    </div>
  );
}

export default App;
