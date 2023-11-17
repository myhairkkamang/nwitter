import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "routes/Login";
import Home from "routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route exact path="/" element ={<Home />} />
                ) : (
                    <Route exact path="/" element={<Login />} />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;