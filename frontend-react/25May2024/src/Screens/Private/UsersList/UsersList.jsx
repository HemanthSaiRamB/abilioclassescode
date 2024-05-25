import { useNavigate, useOutletContext } from "react-router-dom"
import './UsersList.css'
const UsersListSCreen = () => {
    const context = useOutletContext()
    const navigate = useNavigate()
    const gotoSingleUser = (userId) => {
        navigate(`/users/user/${userId}`, {
            state: context
        })
    }
    return (
        <div className="container">
            <p>CHILD(INDEX ROUTE)-Users List Screen</p>
            <div className="userListContainer">

                {
                    context.map((user) => {
                        return (
                            <div className="userGrid" key={user.id}>
                                <div className="userDetails" >
                                    <p>UserName:{user.name}</p>
                                    <p>Age:{user.age}</p>
                                    <p>Gender:{user.gender}</p>
                                    <p>Palce:{user.place}</p>
                                    <button onClick={() => gotoSingleUser(user.id)}>User Details</button>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>

    )
}

export default UsersListSCreen