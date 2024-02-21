//Package import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Assets import
import "./App.css";

//Pages import
import Admin from "./pages/Admin";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
