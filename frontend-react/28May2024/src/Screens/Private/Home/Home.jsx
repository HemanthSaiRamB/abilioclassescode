import { useNavigate } from "react-router-dom"
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"
import './Home.css'
const HomeScreen = () => {
    const navigate = useNavigate()
    const { logout, role } = useLoginSessionContext()
    const signOut = () => {
        logout()

    }
    const gotoUsers = () => {
        navigate('/users')
    }

    const gotoProfile = () => {
        navigate('/profile')
    }
    return (
        <>
            <p>Home Screen - Welcome {role && role.toUpperCase()}</p>
            <div className="homeContainer">
                {
                    role === 'admin' && <button onClick={gotoUsers}>GotToUsers</button>
                }
                {
                    role === 'user' && <button onClick={gotoProfile}>GoToProfile</button>
                }
                <button onClick={signOut}>Logout</button>

            </div></>

    )
}

export default HomeScreen