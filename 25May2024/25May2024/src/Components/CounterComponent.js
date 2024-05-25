import { useState } from 'react'
import CounterListComponent from './CounterListComponent'

function CounterComponent() {
    // 1. data holder - 2. data changer

    const [counter, setCouter] = useState(0)
    const [counterList, setCounterList] = useState([])

    const increment = () => {
        setCouter((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCouter((prevState) => prevState - 1)
    }
    const reset = () => {
        setCouter(0)
    }
    const addItemToList = () => {
        setCounterList((prevState) => {
            return [...prevState, { uid: Math.random(), username: `Student${counter}` }]
        })
    }
    const deleteItemFromList = (itemIndex) => {
        setCounterList((prevState)=>{
            return prevState.filter((item,itInd)=>{
                return itemIndex !== itInd
            })
        })
    }
    return (
        <div>
            <h2>Welcome Students</h2>
            <p>Compononent 1</p>
            <p>{counter}</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={addItemToList}>Add Item To List</button>
                <button onClick={deleteItemFromList}>Delete Item From List</button>
            </div>
            <div style={{ margin: '20px' }}>
                <CounterListComponent counterList={counterList} deleteItemFromList={deleteItemFromList}/>
            </div>
        </div>
    );
}

export default CounterComponent