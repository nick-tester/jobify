import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

const App = () => {
    return <Router>
        <nav>
            <Link to="/">Dashboard </Link>
            <Link to="/register"> Register</Link>
            <Link to="/landing"> Landing</Link>
        </nav>
        <Routes>
            <Route path="/" element={<div>Dashboard Page</div>} />
            <Route path="/register" element={<div>Register Page</div>} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
    </Router>
};

export default App;