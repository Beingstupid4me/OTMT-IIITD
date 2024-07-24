import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home/Home';
import OurServices from './pages/Our_services/OurServices';
import FacInn from './pages/Facillitate_innovation/FacInn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tam from './pages/Tech_assessment/Tam';
import Tech from './pages/Technology/Tech';
import Res from './pages/Resources/Res';
import Coll from './pages/Collaborate/Coll';
import Eve from './pages/Events/Eve';






function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/service' element={<OurServices />}/>
      <Route path='/facinn' element={<FacInn />} />
      <Route path='/tam' element={<Tam />} />
      <Route path='/technology' element={<Tech />} />
      <Route path='/resources' element={<Res />} />
      <Route path='/collaborate' element={<Coll />} />
      <Route path='/events' element={<Eve />} />
      
      



    

    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
