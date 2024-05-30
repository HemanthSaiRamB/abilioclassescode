import { Provider } from 'react-redux';   //connecting redux store to react application
import RouteConfig from './App_Route/RouteConfig';
import { LoginSessionProvider } from './ContextAPI/UserLoginSessionContext';
import store from './store/store';
function App() {

  return (
    <>
      <Provider store={store}> 
        <LoginSessionProvider>
          <RouteConfig />
        </LoginSessionProvider>
      </Provider>
    </>

  )
}

export default App;
