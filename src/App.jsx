import { Link, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import UserInfo from "./pages/UserInfo";
import Test from "./components/Test";
import Login from "./pages/Login";
import Navbar from "./layout/Navbar";
import Repos from "./pages/Repos";
import NotFound404 from "./pages/NotFound404";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />

                <Route
                    path="/userinfo"
                    element={
                        <ProtectedRoute>
                            <UserInfo />
                        </ProtectedRoute>
                    }
                />

                <Route path="/about" element={<About />} />
                <Route path="/repos" element={<Repos />} />
                <Route path="/test" element={<Test />} />
                <Route path="/*" element={<NotFound404 />} />
            </Routes>
        </div>
    );
}

export default App;
