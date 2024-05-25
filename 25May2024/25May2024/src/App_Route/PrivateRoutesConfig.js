import HomeScreen from "../Screens/Private/Home/Home";
import SingleUserScreen from "../Screens/Private/SingleUser/SingleUser";
import UsersScreen from "../Screens/Private/Users/Users";
import UsersListSCreen from "../Screens/Private/UsersList/UsersList";

// there can be only one index route per a route/parent route
export const Private_Routes = [
    {
        path: '/',
        element: <HomeScreen />,
        children: []
    },
    {
        path: '/users', // parent route
        element: <UsersScreen />,
        children: [ // nested/children route
            {
                index: true, // index
                element: <UsersListSCreen />,
            },
            {
                path: 'user/:userId', // dynamic route/route parameters
                element: <SingleUserScreen />,
            }
        ]
    }
]