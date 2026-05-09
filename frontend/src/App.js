import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyTickets from "./pages/MyTickets";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import FindRide from "./pages/FindRide";
import OfferRide from "./pages/OfferRide";
import About from "./pages/About";
import Support from "./pages/Support";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/about" element={<About />} />

        <Route path="/offer" element={<OfferRide />} />

        <Route path="/tickets" element={<MyTickets />} />

        <Route path="/support" element={<Support />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route
          path="/find"
          element={
            <ProtectedRoute>
              <FindRide />
            </ProtectedRoute>
          }
        />

        <Route
          path="/offer"
          element={
            <ProtectedRoute>
              <OfferRide />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000}/>
    </BrowserRouter>
  );
}


export default App;