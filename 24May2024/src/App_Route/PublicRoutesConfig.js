import LoginScreen from '../Screens/Public/Login/Login'
import RegisterScreen from '../Screens/Public/Register/Register'

export const Public_Routes = [
    {
        path: '/',
        element: <LoginScreen />,
        children: []
    },
    {
        path: '/register',
        element: <RegisterScreen />,
        children: []
    }
]