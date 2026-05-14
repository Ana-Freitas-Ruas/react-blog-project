import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/pages/register/Register";
import TopBar from "./components/topBar/TopBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Write from "./components/write/Write";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";

function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
