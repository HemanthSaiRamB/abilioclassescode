import { useEffect, memo } from "react"

const CounterListComp = ({ userList, addToList, bigValue }) => {
    // console.log('ppp')
    useEffect(() => {
        // console.log('ppp 1')
    }, [addToList])
    useEffect(() => {
        // console.log('ppp 2')
    }, [addToList])
    return (
        <>
            CounterListComp
            <ul>
                {
                    userList.length &&
                    <>
                        {
                            userList.map((user, userInd) => {
                                return (
                                    <li key={userInd}>{user.name}</li>
                                )
                            })
                        }
                    </>
                }
            </ul>
            <button onClick={addToList}>Add To list</button>
            {bigValue}
        </>
    )
}

export default memo(CounterListComp)