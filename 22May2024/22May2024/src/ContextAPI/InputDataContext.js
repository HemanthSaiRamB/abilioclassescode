import { createContext, useContext, useState } from 'react' // step1

//uses custom hook concept 
const InputDataContext = createContext(null) // step2 - creating context

//Provider - Consumer pattern -> One-to-Many relationship

export const InputDataProvider = ({ children }) => { // step3 - render-props - children is compulsory prop

    const [input, setInput] = useState('')

    const inputChange = (e) => {
        setInput(e.target.value)
    }
    // step 4 provider - wrap children inside provider
    return (
        <InputDataContext.Provider value={{ input, inputChange }}>
            {children}
        </InputDataContext.Provider>
    )
}

export const useInputDataContext = () => useContext(InputDataContext) // step4