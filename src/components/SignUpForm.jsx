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
    console.log("A short message")

    return (
    <div>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" value={username} onChange={(event)=> setUsername(event.target.value)}/>
            </label>
            <label>Password:
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default SignUpForm