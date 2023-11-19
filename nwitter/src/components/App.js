import { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { loginService } from "fbase";

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(loginService.currentUser);

	useEffect(() => {
		loginService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
			} else
				setIsLoggedIn(false);

			setInit(true);
		});
	}, []);
	
	return (
    	<>
    		{init ? <AppRouter isLoggedIn={isLoggedIn} />: "initializing..."}
			<footer>&copy; {new Date().getFullYear()} Nwitter</footer>      
    	</>
  	);
}

export default App;

