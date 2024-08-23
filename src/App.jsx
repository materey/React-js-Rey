import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'


function App() {

  return (
  <BrowserRouter>     
  <CartProvider>
    <Link to="/"> 
      <h1>
        Hockey Elite
      </h1>
    </Link>
    <NavBar />

    <Routes>
    <Route path="/" element= {<ItemListContainer bienvenida="Bienvenidos a la pagina numero 1 del hockey" />} />
    <Route path="/categoria/:idCategoria" element= {<ItemListContainer bienvenida="Bienvenidos a la pagina numero 1 del hockey" />} />
    <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout />} />
    </Routes>   
    </CartProvider>
  </BrowserRouter>
  )
}

export default App
