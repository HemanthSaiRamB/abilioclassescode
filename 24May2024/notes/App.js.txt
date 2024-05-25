import { Route, Routes } from 'react-router-dom';
import CRUDComponent from './Components/CRUDComponent';
import CounterComponent from './Components/CounterComponent';
import CounterComponentRed from './Components/CounterComponentRed';
import FocusInput from './Components/FocusInput';
import FocusInputLayout from './Components/FocusInputLayout';
import { CounterComp } from './Components/MemoizationComponents'
import { InputDataProvider } from './ContextAPI/InputDataContext';
import LoginScreen from './Screens/Login/Login';
import RegisterScreen from './Screens/Register/Register';
import HomeScreen from './Screens/Home/Home';
import { App_Route } from './App_Route/RouteConfig';
function App() {
  return (
    <>

      {/* <CounterComponent /> */}
      {/* <CRUDComponent /> */}

      {/* <CounterComp /> */}
      {/* <FocusInput /> */}
      {/* <InputDataProvider>
        <CounterComponentRed />
        <FocusInputLayout />
      </InputDataProvider> */}
      <Routes>
        {/* <Route path='/' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/home' element={<HomeScreen />} /> */}
        {
          App_Route.map((route, routeIndex) => {
            return (
              <Route key={routeIndex} path={route.path} element={route.element} />
            )
          })
        }
      </Routes>
    </>

  )
}

export default App;
