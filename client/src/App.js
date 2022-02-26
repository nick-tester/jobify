import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Page from "./pages";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page.Dashboard />} />
                <Route path="/register" element={<Page.Register />} />
                <Route path="/landing" element={<Page.Landing />} />
                <Route path="*" element={<Page.Error />} />
            </Routes>
        </Router>
    )
};

export default App;