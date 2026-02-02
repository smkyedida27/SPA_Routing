import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-4">
      <div className="alert alert-primary text-center">
        Home Page Content
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mt-4">
      <div className="alert alert-success text-center">
        Contact Page Content
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-dark bg-dark px-3">
        <Link className="text-white me-3" to="/">Home</Link>
        <Link className="text-white" to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
