import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home , Contributors } from "./pages/index.js";
import "./index.css"
import { images } from "./constants/images.js";
import { useStore } from "./constants/store.js";

function App() {

  const { theme } = useStore();
  return (
    <BrowserRouter>
      <div
        style={{ backgroundImage: `url(${images[theme].bgImage})` }}
        className="min-h-screen bg-cover bg-center"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/admin/login" element={<Auth type="admin" />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
