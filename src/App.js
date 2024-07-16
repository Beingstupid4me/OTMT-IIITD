import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/service' element={<OurServices />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
