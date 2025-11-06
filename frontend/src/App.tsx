import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home } from "./pages/index.ts";
import "./index.css"
import { images } from "./assets/images.ts";

function App() {

  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${images.lightMode.bgImage})` }} className="min-h-screen bg-cover">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/admin/login" element={<Auth type="admin" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
