import { lazy } from "react";
const HomeScreen = lazy(() => import("../Screens/Private/Home/Home"))
const UsersScreen = lazy(() => import("../Screens/Private/Users/Users"))
const UsersListSCreen = lazy(() => import("../Screens/Private/UsersList/UsersList"))
const SingleUserScreen = lazy(() => import("../Screens/Private/SingleUser/SingleUser"))
const LoggedInUserScreen = lazy(() => import("../Screens/Private/LoggedInUser/LoggedInUser"))


// there can be only one index route per a route/parent route
export const Private_Routes = [
    {
        path: '/',
        element: <HomeScreen />,
        children: [],
        role: ['admin', 'user']
    },
    {
        path: '/users', // parent route
        element: <UsersScreen />,
        role: ['admin'],
        children: [ // nested/children route
            {
                index: true, // index
                element: <UsersListSCreen />,
                role: ['admin']
            },
            {
                path: 'user/:userId', // dynamic route/route parameters
                element: <SingleUserScreen />,
                role: ['admin']
            }
        ]
    },
    {
        path: '/profile',
        element: <LoggedInUserScreen />,
        children: [],
        role: ['user']
    }
]