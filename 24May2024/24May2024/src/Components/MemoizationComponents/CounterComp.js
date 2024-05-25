import { useCallback, useState, useMemo } from "react"
import CounterListComp from "./CounterListComp"
import './CounterComp.css'
const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const [userList, setUserList] = useState([])
    let bigValue = useMemo(() => {
        console.log('ppp 3')
        var bigValue = bigValue * 10
        return bigValue
    }, [counter])

 

    const addToList = useCallback(() => {
        setUserList([...userList, { name: 'xyz' + Math.random(), age: 32 }])
    }, [userList])



    return (
        <>
            CounterComp
            <div className="container">
                Counter: {counter}
                <button onClick={() => { setCounter((prevCounter) => prevCounter + 1) }}>Increment</button>
                <button onClick={() => { setCounter((prevCounter) => prevCounter - 1) }}>Decrement</button>
                <button onClick={() => { setCounter(0) }}>Reset</button>
                <div style={{ margin: '20px' }}>
                    <CounterListComp userList={userList} addToList={addToList} bigValue={bigValue} />
                </div>
            </div>
        </>
    )
}

export default CounterComp