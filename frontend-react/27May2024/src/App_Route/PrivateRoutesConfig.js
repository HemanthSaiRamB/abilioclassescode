import HomeScreen from "../Screens/Private/Home/Home";
import LoggedInUserScreen from "../Screens/Private/LoggedInUser/LoggedInUser";
import SingleUserScreen from "../Screens/Private/SingleUser/SingleUser";
import UsersScreen from "../Screens/Private/Users/Users";
import UsersListSCreen from "../Screens/Private/UsersList/UsersList";

// there can be only one index route per a route/parent route
export const Private_Routes = [
    {
        path: '/',
        element: <HomeScreen />,
        children: [],
        role:['admin','user']
    },
    {
        path: '/users', // parent route
        element: <UsersScreen />,
        role:['admin'],
        children: [ // nested/children route
            {
                index: true, // index
                element: <UsersListSCreen />,
                role:['admin']
            },
            {
                path: 'user/:userId', // dynamic route/route parameters
                element: <SingleUserScreen />,
                role:['admin']
            }
        ]
    },
    {
        path: '/profile',
        element: <LoggedInUserScreen />,
        children:[],
        role:['user']
    }
]