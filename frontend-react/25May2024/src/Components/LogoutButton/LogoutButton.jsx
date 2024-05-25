import { useLoginSessionContext } from '../../ContextAPI/UserLoginSessionContext'
import './LogoutButton.css'
const LogoutButton = () => {
    const { logout } = useLoginSessionContext()
    const signOut = () => {
        logout()
    }
    return (
        <button className="logout" onClick={signOut}>Logout</button>
    )
}

export default LogoutButton