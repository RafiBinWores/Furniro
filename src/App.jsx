import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
