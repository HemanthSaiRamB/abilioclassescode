import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"
const LoginScreen = () => {
    const { login } = useLoginSessionContext()
    const navigate = useNavigate()

    const gotoRegister = () => {
        navigate('register')
    }
    const signIn = (role) => {
        login(role)
    }
    return (
        <div className="container">
            <p>Login Screen</p>
            <div className="navItem">
                <button className="btn" onClick={gotoRegister}>Register</button>
                <Link onClick={() => signIn('admin')} className="lnk" to={'/'}>Admin Login</Link>
                <Link onClick={() => signIn('user')} className="lnk" to={'/'}>User Login</Link>
            </div>

        </div>
    )
}

export default LoginScreen