import { useReducer } from 'react'

/*
state - data holder
dispatch - initiate the change request/sends the change to reducer {gender:abc}
initialState
reducer  - is a function with two arg 
    state - data holder
    action - change name/change age /change gender
*/
const initialState = [
    {
        name: "Hemanth",
        age: 2,
        gender: 'Male'
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return [...state, { ...action.data }]
        case 'update':
            return state.map((student, studInd) => {
                if (studInd === action.data.index) {
                    student.name = action.data.name
                    return student
                }
                return student
            })
        case 'delete':
            return state.filter((student, studInd)=>{
                return studInd !==action.data.index
            })
        default:
            return state
    }
}
// dispatch(action){} => reducer => state{}
function CRUDComponent() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const createList = () => {
        let action = { type: 'create', data: { name: Math.random() + 'xyz', age: 23, gender: 'Male' } }
        dispatch(action)
    }

    const updateList = (studentInd) => {
        let action = { type: 'update', data: { index: studentInd, name: Math.random() + 'abc' } }
        dispatch(action)
    }

    const deleteList = (studentInd) => {
        let action = { type: 'delete', data: { index: studentInd } }
        dispatch(action)
    }

    return (
        <>
            <button onClick={createList}>Create</button>
            {
                <ul>
                    {
                        state.map((student, studentIndex) => {
                            return (
                                <li key={studentIndex}>
                                    <p>Name:{student.name}</p>
                                    <p>Age: {student.age}</p>
                                    <p>Gender{student.gender}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                        {/* <button onClick={read}></button> */}
                                        <button onClick={() => updateList(studentIndex)}>Update</button>
                                        <button onClick={() => deleteList(studentIndex)}>Delete</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </>

    )
}

export default CRUDComponent