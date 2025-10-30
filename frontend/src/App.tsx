import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Login, Signup, AdminLogin } from "./pages/index.ts";
import "./index.css"
import {images} from "./public/images.ts";

function App() {

  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${images.lightMode.bgImage})` }} className="min-h-screen bg-cover">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
