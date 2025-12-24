// App.jsx
import './App.css'
import { Route, Routes, HashRouter, NavLink } from 'react-router-dom'
import Main from '/src/pages/Main'
import Configurator from './pages/Configurator'

function App() {
  return (
    <HashRouter>
      <div className="nav-container">
        <h2 className="logo-text">Конфигуратор</h2>
        <NavLink to='/main'>Главная</NavLink>
      </div>
      <Routes>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/config/:id' element={<Configurator/>}></Route>
        <Route path='*' element={<Main/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
