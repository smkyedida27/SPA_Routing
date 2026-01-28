import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="alert alert-info text-center">
        Welcome – Select a Page
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="card border-primary p-4 text-center">
        <h4 className="text-primary">Dashboard</h4>
        <p>User statistics are shown here</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="container mt-5">
      <div className="card border-success p-4 text-center">
        <h4 className="text-success">Profile</h4>
        <p>User personal details are shown here</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar bg-light px-3">
        <Link className="me-3" to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        {/* DEFAULT ROUTE */}
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
