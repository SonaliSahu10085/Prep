import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home } from "./pages/index.ts";
import "./index.css"
import { images } from "./constants/images.ts";
import { useStore } from "./constants/store.ts";

function App() {

  const { theme } = useStore();
  return (
    <BrowserRouter>
      <div
        style={{ backgroundImage: `url(${images[theme as "light" | "dark"].bgImage})` }}
        className="min-h-screen bg-cover bg-center"
      >
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
