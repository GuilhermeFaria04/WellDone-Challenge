import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Fotos from './pages/Fotos';
import Vistoria from './pages/Vistoria';
import Integrantes from './pages/Integrantes';
import Header from './components/header';


function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Vistoria/>} />
        <Route path='/enviofotos' element={<Fotos/>}/>
        <Route path='/integrantes' element={<Integrantes/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;