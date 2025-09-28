// import { Button } from "@/components/ui/button"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import StartInterview from "./pages/startInterview";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/interview" element={<StartInterview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
