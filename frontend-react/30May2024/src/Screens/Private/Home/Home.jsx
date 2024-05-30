import { useNavigate } from "react-router-dom"
import { useLoginSessionContext } from "../../../ContextAPI/UserLoginSessionContext"
import './Home.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { decrement, increment, reset } from "../../../store/counterSlice"
const HomeScreen = () => {
    const navigate = useNavigate()
    const { logout, role } = useLoginSessionContext()
    const counter = useSelector(store => store.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('ppp', counter)
    }, [counter])
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

            </div>
            <p>{counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

            {/* <button onClick={() => dispatch(reset())}>Get My Location</button> */}
            {/* <p>User's Current Locatio:</p> */}
        </>

    )
}

export default HomeScreen