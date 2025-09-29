import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import StartInterview from "./pages/StartInterview";

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
