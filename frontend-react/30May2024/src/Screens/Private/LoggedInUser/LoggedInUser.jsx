import { useLocation, useParams } from "react-router-dom"
import './LoggedInUser.css'
import { useEffect, useState } from "react"
import LogoutButton from "../../../Components/LogoutButton/LogoutButton"
import GoBackButton from "../../../Components/GoBackButton/GoBackButton"
const LoggedInUserScreen = () => {
    // const [userDtls, setUserDtls] = useState(null)
    const userDtls = {
        id: 2324,
        name: 'Hemanth',
        age: 232,
        gender: 'Male',
        place: 'Hyderabad',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKldCzNZ4Au96N2DWUEZmLCDBG8JqWaFPv7940y7qrg&s'
    }

    return (
        <div className="loggedInUserContainer">
            <p>Logged In User Screen</p>
            {
                userDtls !== null && <>
                    <div className="userGrid">
                        <div className="userDetails">
                            <img src={userDtls.image} alt={userDtls.name + 'image'} />
                            <div className="userInfo">
                                <p>{userDtls.name}</p>
                                <p>{userDtls.gender}</p>

                            </div>
                            <div className="userInfo">
                                <p>{userDtls.age} years</p>
                                <p>{userDtls.place}</p>
                            </div>
                        </div>
                    </div></>
            }
            <GoBackButton />
            <LogoutButton />
        </div>
    )
}

export default LoggedInUserScreen