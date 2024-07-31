import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
  <BrowserRouter>
    <Link to="/"> 
      <h1>
        Hockey Elite
      </h1>
    </Link>

    <NavBar />

    <Routes>
    <Route path="/" element= {<ItemListContainer bienvenida="Bienvenidos a la pagina numero 1 del hockey" />} />
    <Route path="/categoria/:idCategoria" element= {<ItemListContainer bienvenida="Bienvenidos a la pagina numero 1 del hockey" />} />
    <Route path="/detalle/:idProducto" element={ItemDetailContainer} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
