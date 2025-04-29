import axios from "axios"
import { useEffect, useState } from "react"
const Authenticate = ({token , setToken}) => {

    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = async () => {
        console.log("--handleClick--")
        try {
            const {data} = await axios.get("https://fsa-jwt-practice.herokuapp.com/authenticate" , {
                headers: {
                    "Content-Type": "application",
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("!", data)
            setSuccessMessage(data.message)
        } catch (error) {
            console.error("error found:",error.message)
            setError(error.message)
        }
    }



    return (
        <div>
            <h2>Authentication</h2>
            { error ? <p>Error detected: {error}</p> : successMessage ? <p>{successMessage}</p> : null}
            <button onClick={()=>{handleClick()}}>Authenticate Token</button>
        </div>  
    )
}

export default Authenticate