import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import Error from "./components/Error";
import { useState } from "react";

function App() {
	const [user , setUser] = useState({})
	const [error, setError] = useState(null)
	const [token, setToken] = useState(null)

	return (
		<div>
			<SignUpForm token={token} setToken={setToken}/>
			<Authenticate token={token} setToken={setToken} error={error} setError={setError}/>
		</div>
	);
}

export default App;
