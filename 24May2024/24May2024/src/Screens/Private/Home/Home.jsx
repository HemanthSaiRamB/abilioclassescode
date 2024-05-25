import { useNavigate } from "react-router-dom"
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"

const HomeScreen = () => {
    const navigate = useNavigate()
    const { logout } = useLoginSessionContext()
    const signOut = () => {
        logout()

    }
    const gotoUsers = ()=>{
        navigate('/users')
    }
    return (
        <>
            <p>Home Screen</p>
            <button onClick={gotoUsers}>GotToUsers</button>
            <button onClick={signOut}>Logout</button>
        </>
    )
}

export default HomeScreen