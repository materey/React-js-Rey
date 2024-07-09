import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/Navbar/NavBar'
function App() {

  return (
  <div>
    <h1>
      Hockey Elite
    </h1>
    <NavBar />
    <ItemListContainer bienvenida={'Bienvenidos a la pagina numero 1 del hockey'}/>
  </div>
  )
}

export default App
