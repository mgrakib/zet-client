import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
