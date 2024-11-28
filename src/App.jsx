import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import Navbar from "./components/Navbar";
import Home from "./pages/Dashboard";
import SidebarLayout from "./layout/SidebarLayout";
import Order from "./pages/ForOrder/Order";
import Parties from "./pages/Parties";
import Attendance from "./pages/Attendance";
import ScrollToTop from "./components/ScrollToTop";
import CreateOrder from "./pages/ForOrder/CreateOrder";
import Product from "./pages/Product";
import OrderView from "./pages/ForOrder/OrderView";
import SalesPerson from "./pages/SalesPerson";

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
        <Route path="/product" element={<Product />}  />
        <Route path="/attendance" element={<Attendance />}  />
        <Route path="/create-order" element={<CreateOrder />}  />
        <Route path="/orderview" element={<OrderView />}  />
        <Route path="/salesperson" element={<SalesPerson />}  />
      </Routes>
      </SidebarLayout>
    </Router>
    </>
  )
}

export default App
