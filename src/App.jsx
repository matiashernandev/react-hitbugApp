import { Link, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import UserInfo from "./pages/UserInfo";
import Test from "./components/Test";
import Login from "./pages/Login";
import Navbar from "./layout/Navbar";
import Repos from "./pages/Repos";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Login />} />

                {/* <Route
                    path="/userinfo"
                    element={
                        <ProtectedRoute>
                            <UserInfo />
                        </ProtectedRoute>
                    }
                /> */}
                <Route path="/userinfo" element={<UserInfo />} />

                <Route path="/repos" element={<Repos />} />
                <Route
                    path="/test"
                    element={
                        <ProtectedRoute>
                            <Test />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
