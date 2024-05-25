import HomeScreen from "../Screens/Home/Home";
import LoginScreen from "../Screens/Login/Login";
import RegisterScreen from "../Screens/Register/Register";

export const App_Route = [
    {
        path: '/',
        element: <LoginScreen />
    },
    {
        path: '/register',
        element: <RegisterScreen />
    },
    {
        path: '/home',
        element: <HomeScreen />
    }
]