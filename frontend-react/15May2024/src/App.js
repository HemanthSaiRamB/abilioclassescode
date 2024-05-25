import CRUDComponent from './Components/CRUDComponent';
import CounterComponent from './Components/CounterComponent';
import CounterComponentRed from './Components/CounterComponentRed';
import FocusInput from './Components/FocusInput';
import FocusInputLayout from './Components/FocusInputLayout';
import { CounterComp } from './Components/MemoizationComponents'
import { InputDataProvider } from './ContextAPI/InputDataContext';
function App() {
  return (
    <>

      {/* <CounterComponent /> */}
      {/* <CRUDComponent /> */}

      {/* <CounterComp /> */}
      {/* <FocusInput /> */}
      <InputDataProvider>
        <CounterComponentRed />
        <FocusInputLayout />
      </InputDataProvider>

    </>

  )
}

export default App;
