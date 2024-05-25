import { useRef, useLayoutEffect, useEffect } from "react"
const FocusInputLayout = () => {
    const inputRef = useRef(null)

    useLayoutEffect(()=>{ // Will execute before useEffect - DOM is ready but not paited on browser
        inputRef.current.focus()
    },[])

    // useEffect(()=>{ // will execute after useLayoutEffect -  - DOM is ready and paited on browser
    //     // inputRef.current.focus()
    // },[])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name</label>
            <input ref={inputRef}

                style={{ width: '315px' }} type="text" placeholder="click on the button to focus" />

        </div>
    )
}

export default FocusInputLayout