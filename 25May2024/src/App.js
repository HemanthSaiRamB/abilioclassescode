import RouteConfig from './App_Route/RouteConfig';
import { LoginSessionProvider } from './ContextAPI/UserLoginSessionContext';
function App() {
  return (
    <>
      <LoginSessionProvider>
        <RouteConfig />
      </LoginSessionProvider>
    </>

  )
}

export default App;
