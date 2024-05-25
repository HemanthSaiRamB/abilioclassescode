import { useRef, useLayoutEffect, useEffect } from "react"
import { useInputDataContext } from "../ContextAPI/InputDataContext"
const FocusInputLayout = () => {
    const { input, inputChange } = useInputDataContext()
    const inputRef = useRef(null)

    useLayoutEffect(() => { // synchronously updates - Will execute before useEffect - DOM mutations is ready but not paited on browser
        inputRef.current.focus()
    }, [])

    // useEffect(()=>{ // will execute after useLayoutEffect -  - DOM is ready and paited on browser
    //     // inputRef.current.focus()
    // },[])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>_____________FocusInputLayout</p>
            <label>Name</label>
            <input
                ref={inputRef}
                value={input}
                onChange={inputChange}
                style={{ width: '315px' }} type="text" placeholder="click on the button to focus" />

        </div>
    )
}

export default FocusInputLayout