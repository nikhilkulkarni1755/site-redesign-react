import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
function App() {
  // const repoName = window.location.pathname.split("/")[1];

  // const baseUrl = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

  return (
    <Router basename="/site-redesign-react">
      {/* <HashRouter> */}
      <nav className="text-center py-4 bg-gray-800 text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      {/* </HashRouter> */}
    </Router>
  );
}

export default App;
