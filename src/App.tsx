import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h1>Not found Page</h1>} />
    </Routes>
  )
}

export default App
