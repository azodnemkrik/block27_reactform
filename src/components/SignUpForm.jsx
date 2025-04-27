import { use, useState } from "react"
import axios from 'axios'

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            const data = await axios.get("https://fsa-jwt-practice.herokuapp.com/signup")
        } catch (error) {
            setError(error)
        }
    }
    console.log("SignUpForm fired!")

    return (
    <div>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form action={handleSubmit}>
            <label>Username:
                <input type="text" name="username" />
            </label>
            <label>Password:
                <input type="password" name="password"/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default SignUpForm