// import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={Home} />
      </Routes>
    </div>
  )
}

export default App
