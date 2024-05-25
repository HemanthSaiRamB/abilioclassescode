import { useNavigate } from "react-router-dom"
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"
import './Home.css'
const HomeScreen = () => {
    const navigate = useNavigate()
    const { logout } = useLoginSessionContext()
    const signOut = () => {
        logout()

    }
    const gotoUsers = () => {
        navigate('/users')
    }
    return (
        <>
            <p>Home Screen</p>
            <div className="homeContainer">
                <button onClick={gotoUsers}>GotToUsers</button>
                <button onClick={signOut}>Logout</button>
            </div></>

    )
}

export default HomeScreen