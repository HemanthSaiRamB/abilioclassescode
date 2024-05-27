import { useNavigate } from "react-router-dom"

const RegisterScreen = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <p>Register Screen</p>
            <button onClick={goBack}>GoBack</button>
        </>
    )
}

export default RegisterScreen