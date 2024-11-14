import { Login, Register } from "./pages"
import  {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
