import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import NoMatch from "./pages/404Page/NoMatch";

function App() {
	const { user } = useContext(Context);
	return (
		<Router>
			<Topbar />
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route path="/posts" element={<Home />} />

				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/post/:id" element={<Single />} />

				<Route path="/write" element={user ? <Write /> : <Login />} />
				<Route path="/settings" element={user ? <Settings /> : <Login />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
}

export default App;
