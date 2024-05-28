import { useNavigate, useOutletContext } from "react-router-dom"
import './UsersList.css'
import { useEffect } from "react"
const UsersListSCreen = () => {
    const context = useOutletContext()
    const navigate = useNavigate()
    const gotoSingleUser = (userId) => {
        navigate(`/users/user/${userId}`, {
            state: context
        })
    }
    useEffect(()=>{
        console.log('ppp',context)
    },[context])
    return (
        <div className="container">
            <p>CHILD(INDEX ROUTE)-Users List Screen</p>
            <div className="userListContainer">
                {
                    context.length &&
                    <>
                        {
                            context.map((user) => {
                                return (
                                    <div className="userGrid" key={user.id}>
                                        <div className="userDetails" >
                                            <img src={user.image} alt={user.name + 'image'} />
                                            <div className="userInfo">
                                                <p>{user.name}</p>
                                                <p>{user.gender}</p>

                                            </div>
                                            <div className="userInfo">
                                                <p>{user.age} years</p>
                                                <p>{user.place}</p>
                                            </div>
                                            <button onClick={() => gotoSingleUser(user.id)}>View</button>
                                        </div>
                                    </div>

                                )
                            })
                        }</>
                }


            </div>
        </div>

    )
}

export default UsersListSCreen