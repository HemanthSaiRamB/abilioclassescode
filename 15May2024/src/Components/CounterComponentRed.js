import { useReducer } from "react"
import { useInputDataContext } from "../ContextAPI/InputDataContext"

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state = state + 1
        case 'decrement':
            return state = state - 1
        case 'reset':
            return state = initialState
        default:
            return initialState
    }
}
function CounterComponentRed() {
    const { input } = useInputDataContext()
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p style={{ margin: '5px' }}>________Counter using UseReducer</p>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                Counter: {state}
                <button style={{ margin: '5px' }} onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
                <button style={{ margin: '5px' }} onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
                <button style={{ margin: '5px' }} onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
                <p>Data coming from FocustInput Layout Comp via Context API <b>{input}</b></p>
            </div>
        </>
    )
}

export default CounterComponentRed