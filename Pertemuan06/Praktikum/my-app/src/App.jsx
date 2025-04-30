import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutDashboard } from "./components/layouts/LayoutDashboard";
import { MahasiswaPage } from "./pages/MahasiswaPage";

export default function App() {
  return (
    <Router>
      <LayoutDashboard>
        <Routes>
          <Route path="/mahasiswa" element={<MahasiswaPage />} />
        </Routes>
      </LayoutDashboard>
    </Router>
  );
}
