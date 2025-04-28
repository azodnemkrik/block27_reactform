import { useState } from "react"
import axios from 'axios'

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (formData) => {
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(username, password)
        const user = {
            username,
            password
        }
        try {
            const {data} = await axios.post("https://fsa-jwt-practice.herokuapp.com/signup")
            console.log(data)
            window.localStorage.setItem("token", data.token)
            console.log(data.token)
        } catch (error) {
            console.error(error)
            console.log(error.status)
        }
    }

    return (
    <div>
        <h2>Sign Up!</h2>
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