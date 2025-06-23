import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Booking from "../pages/Booking";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/flights" element={<Flights />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/booking" element={<Booking />} />
  </Routes>
);

export default AppRoutes;
