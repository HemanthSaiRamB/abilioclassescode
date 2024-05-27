import { useLocation, useParams } from "react-router-dom"
import './SingleUser.css'
import { useEffect, useState } from "react"
const SingleUserScreen = () => {
    const { userId } = useParams()
    const location = useLocation()
    const [userDtls, setUserDtls] = useState(null)
    useEffect(() => {
        if (location.state.length) {
            setUserDtls({ ...location.state.find(user => user.id === parseInt(userId)) })
        }
    }, [location, userId])

    return (
        <div className="singleUserContainer">
            <p>Single Users Screen</p>
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

        </div>
    )
}

export default SingleUserScreen