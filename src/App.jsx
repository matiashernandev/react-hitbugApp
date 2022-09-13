import { Link, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Test from "./components/Test";
import Login from "./pages/Login";
import NavbarTest from "./layout/Navbar";
import Repos from "./pages/Repos";

function App() {
    return (
        <div className="App">
            <NavbarTest />
            <h1>hola mundo llorando desde app</h1>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/repos" element={<Repos />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </div>
    );
}

export default App;
