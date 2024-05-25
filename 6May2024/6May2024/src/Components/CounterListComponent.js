import { useEffect } from 'react'

function CounterListComponent(props) {
    const { counterList, deleteItemFromList } = props

    useEffect(() => {

        // let timer = setInterval(()=>{
        //     console.log('timer')
        // },1000)
        console.log('ppp mounting stage useEffect')

        return () => { // componentwillUnmount
            // clearTimeout()
            // resetTo()
            // clearInterval(timer)
        }

    }, [])// componentDidMount

    useEffect(() => {
        console.log('ppp counterList')
    }, [counterList]) // componentDidUpdate

    return (
        <>
            <p>Compononent 2</p>

            {
                counterList.length > 0 ? <>
                    {
                        <ul onClick={() => { console.log('ppp parent is clicked') }}>
                            {counterList.map((item, itemIndex) => {
                                return <li key={itemIndex}>
                                    <p>Id: {item.uid}</p>
                                    <p>name: {item.username}</p>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        deleteItemFromList(itemIndex)
                                    }
                                    }>Delete</button>
                                </li>
                            })}
                        </ul>

                    }
                </> : <>No Data Available</>

            }
        </>
    )
}

export default CounterListComponent