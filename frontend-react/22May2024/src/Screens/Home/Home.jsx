import { useNavigate } from "react-router-dom"

const HomeScreen = () => {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
    }
    return (
        <>
            <p>Home Screen</p>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default HomeScreen