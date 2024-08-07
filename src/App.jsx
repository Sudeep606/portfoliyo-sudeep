import { Routes, Route } from 'react-router-dom';
import './App.css';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Certificates from './Pages/Certificates';
function App() {
  return (
      <>
        <Header />
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/certificates' element={<Certificates/>}/>
    </Routes>
        <Footer />
      </>
  
  );
}

export default App;

