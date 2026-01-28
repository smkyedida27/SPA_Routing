import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="card p-4 text-center">
        <h3 className="text-primary">Home Page</h3>
        <p>Welcome to the Home section</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container mt-5">
      <div className="card p-4 text-center">
        <h3 className="text-success">About Page</h3>
        <p>This page describes the application</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
