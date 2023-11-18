// import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="login" element={<Login />} />
        {/* <Route path="/list" element={Home} /> */}
      </Routes>
    </div>
  )
}

export default App
