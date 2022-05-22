import {useState} from 'react'

const Contador = (props) => {
    const [ count, setCount] = useState(0)

    const decrement = () => {
        setCount( count - 1 )
    }

    const increment = () => {
        setCount( count + 1 )
    }

    return(
        <div style = {{display:'flex'}}>
        <button onClick = {decrement}> - </button>
        <h2>{count}</h2>
        <button onClick = {increment}> + </button>
        </div>
    )
}

export  default Contador