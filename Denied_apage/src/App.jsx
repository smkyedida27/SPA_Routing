import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
  return (
    <div className="container mt-5">
      <div className="alert alert-danger text-center">
        404 – Page Not Found
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <div className="container mt-5">
              <div className="alert alert-info text-center">
                Home Page
              </div>
            </div>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
