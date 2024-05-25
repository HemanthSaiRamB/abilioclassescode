import { Outlet, useNavigate } from "react-router-dom"

const UsersScreen = () => {
    const navigate = useNavigate()
    const gotoSingleUser = () => {
        navigate('/users/user/1')
    }
    return (
        <>
            <p>Users Screen-Search Component</p>
            <button onClick={gotoSingleUser}>SingleUser</button>
            <Outlet />
        </>
    )
}

export default UsersScreen