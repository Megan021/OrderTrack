import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import SidebarLayout from "./layout/SidebarLayout";
import Order from "./pages/Order";

function App() {

  return (
    <>
    <Router>
      <SidebarLayout>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/order" element={<Order />}  />
      </Routes>
      </SidebarLayout>
    </Router>
    </>
  )
}

export default App
