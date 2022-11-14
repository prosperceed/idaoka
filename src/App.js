import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
