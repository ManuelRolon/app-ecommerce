import { useState ,useEffect } from "react"
import { listaProductos } from "../../asyncmock" 
import ItemList from "../ItemList/itemList"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
    const[productos, setProductos] = useState([])

    useEffect(() => {
        listaProductos().then(response =>{
            setProductos(response)
        })
    },[])

    const onAdd = (cant) => {
        console.log(`se ha agregado ${cant}` )
    }
    
    return(
        <div>
        <h1 style={{color : props.color, textAlign: 'center'}  }>{props.greeting}</h1>
        <ItemList productos={productos}/>
        <ItemCount stock ={5} inicial ={1} onAdd={onAdd} />

        </div>

    )
}
export default ItemListContainer