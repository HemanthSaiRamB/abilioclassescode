import { useReducer } from "react"

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

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Counter using UseReducer
            <div>
                Counter: {state}
                <button onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
                <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
                <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
            </div>
        </>
    )
}

export default CounterComponentRed