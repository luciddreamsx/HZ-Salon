import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}