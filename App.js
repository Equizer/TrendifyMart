import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/home/Home';
import Cart from './Components/cart/Cart';
import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';
import ProgressState from './context/progress/ProgressState';

function App() {

  return (
    <ProgressState>
    <Router>
      <Navbar />
      <div className='d-flex justify-content-start'>
        <div>
        <Sidebar />
        </div>
        <div className='container'>
          <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        </div>
      </div>
    </Router>
    </ProgressState>
  );
}

export default App;
