import { Link, useNavigate } from "react-router-dom"
import './Login.css'
const LoginScreen = () => {
    const navigate = useNavigate()

    const gotoRegister = () => {
        navigate('register')
    }
    return (
        <div className="container">
            <p>Login Screen</p>
            <div className="navItem">
                <button className="btn" onClick={gotoRegister}>Register</button>
                <Link className="lnk" to={'home'}>Login</Link>
            </div>

        </div>
    )
}

export default LoginScreen