import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
