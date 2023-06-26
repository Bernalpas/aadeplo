import 'semantic-ui-css/semantic.min.css'
import Navegacion from './Componenetes/Navegacion';
import Home from './Componenetes/Home';
import Vite from './Componenetes/Vite';
import Formulario from './Componenetes/Formulario';
import Update from './Componenetes/Update';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/vite" element={ <Vite />} />
        <Route path="/formulario" element={ <Formulario />} />
        <Route path="/update" element={ <Update />} />
        {/* <Route path="/*" element={ <Error />} /> */}
      </Routes>
    </>
  )
}

export default App;
