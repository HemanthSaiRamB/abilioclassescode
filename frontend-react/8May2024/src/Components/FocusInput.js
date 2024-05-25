import { useRef, useState } from "react"
const FocusInput = () => {
    const inputRef = useRef(null)
    const [input, setInput] = useState('')
    const focusInp = () => {
        console.log(inputRef)
        inputRef.current.focus()
        
    }
    // const inputChange = (e) => {
    //     console.log(e)
    //     // console.log(e.target.value)
    //     setInput(e.target.value)
    // }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name</label>
            <input ref={inputRef} 
            // value={input} 
            // onChange={inputChange} 
            style={{ width: '315px' }} type="text" placeholder="click on the button to focus" />
            <button onClick={focusInp}>FocusInput</button>
        </div>
    )
}

export default FocusInput