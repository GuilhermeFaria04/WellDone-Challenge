import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Fotos from './pages/Fotos';
import Vistoria from './pages/Vistoria';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/enviofotos' element={<Fotos/>}/>
        <Route path='/vistoria' element={<Vistoria/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
