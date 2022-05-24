import {useState} from 'react'

const Contador = (props) => {
    const [ count, setCount] = useState(0)
    let agregarCarrito= [];

    const decrement = () => {
        if( count > props.inicial) {
            setCount( count - 1 )

        }
    }

    const increment = () => {

        setCount( count + 1 )
    }
    
    const pushCarrito = () => {
        if (count < props.stock) {
            agregarCarrito.push(count)
        }
        console.log(agregarCarrito)

    }

    return(
        <div style = {{padding:'2rem' ,width:'30rem' ,display:'flex',alignItems:'center' , border: '1px solid black', margin:'4rem'}}>
        <button onClick = {decrement} style= {{height:'2rem', width:'6rem' }}> - </button>
        <h2 style={{paddingRight:'1rem', paddingLeft:'1rem'}} actualizar = {props.count}>{count}</h2>
        <button onClick = {increment} style= {{height:'2rem', width:'6rem' }}> + </button>
        <button onClick={pushCarrito}  style={{height:'2rem', margin:'2rem'}} > AGREGAR AL CARRITO</button>

        </div>
    )
}

export  default Contador