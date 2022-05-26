import { useState ,useEffect } from "react"
import { listaProductos } from "../../asyncmock" 
import ItemList from "../ItemList/itemList"


const ItemListContainer = (props) => {
    const[productos, setProductos] = useState([])

    useEffect(() => {
        listaProductos().then(response =>{
            setProductos(response)
        })
    },[])

    return(
        <div>
        <h1 style={{color : props.color, textAlign: 'center'}  }>{props.greeting}</h1>
        <ItemList productos={productos}/>


        </div>

    )
}
export default ItemListContainer