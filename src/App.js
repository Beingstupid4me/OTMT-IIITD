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
import Cont from './pages/Contact/Cont';
import Lisc from './pages/Liscensing/Lisc';
import IPR_man from './pages/IPR/IPR_man';
import Startup from './pages/Startup_fac/Startup';
import Tech_res from './pages/Tech_Research/Tech_res';
import Tech_tech from './pages/Tech_Technology/Tech_tech';
import Fac_Res from './pages/Fac_Resources/Fac_Res';
import Ipr_Table from './pages/IPR_TABLE/Ipr_Table';










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
      <Route path='/contact' element={<Cont />} />
      <Route path='/Lisc' element={<Lisc />} />
      <Route path='/Ipr' element={<IPR_man />} />
      <Route path='/Startup' element={<Startup />} />
      <Route path='/Tech_res' element={<Tech_res />} />
      <Route path='/Tech_tech' element={<Tech_tech />} />
      <Route path='/Fac_Res' element={<Fac_Res />} /> 
      <Route path='/Ipr_Table' element={<Ipr_Table />} /> 

      

      
      

      
      
      



    

    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
