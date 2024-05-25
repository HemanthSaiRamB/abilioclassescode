import { Outlet, useNavigate } from "react-router-dom"
import './Users.css'
import GoBackButton from "../../../Components/GoBackButton/GoBackButton"
import { usersList } from "../../../mock/mock"
import LogoutButton from "../../../Components/LogoutButton/LogoutButton"
const UsersScreen = () => {
    return (
        <>
            <p>PARENT-Users Screen-Search Component</p>
            <div className="userSrchContainer">
                <Outlet context={usersList} />
            </div>
            <div className="btnContainer">
                <GoBackButton className='goBackBtn'/>
                <LogoutButton className='logoutBtn'/>
            </div>

        </>
    )
}

export default UsersScreen