import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import Error from "./components/Error";
import { useState } from "react";

function App() {
	const [user , setUser] = useState({})
	const [error, setError] = useState("")

	return (
		<div>
			<SignUpForm />
			<Authenticate />
			<Error />
		</div>
	);
}

export default App;
