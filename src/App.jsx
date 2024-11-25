import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import SidebarLayout from "./layout/SidebarLayout";
import Order from "./pages/ForOrder/Order";
import Parties from "./pages/Parties";
import Attendance from "./pages/Attendance";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <SidebarLayout>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/order" element={<Order />}  />
        <Route path="/parties" element={<Parties />}  />
        <Route path="/attendance" element={<Attendance />}  />
      </Routes>
      </SidebarLayout>
    </Router>
    </>
  )
}

export default App
