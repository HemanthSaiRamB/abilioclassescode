import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"
const LoginScreen = () => {
    const { login } = useLoginSessionContext()
    const navigate = useNavigate()

    const gotoRegister = () => {
        navigate('register')
    }
    const signIn = () => {
        login()
    }
    return (
        <div className="container">
            <p>Login Screen</p>
            <div className="navItem">
                <button className="btn" onClick={gotoRegister}>Register</button>
                <Link onClick={signIn} className="lnk" to={'/'}>Login</Link>
            </div>

        </div>
    )
}

export default LoginScreen