const productos = [
    {id:'1', tipo: 'remera', precio: '1900', stock:'9'},
    {id:'2', tipo: 'jean', precio: '2600', stock:'3'},
    {id:'3', tipo: 'buzo', precio: '4000', stock:'6'},
    {id:'4', tipo: 'gorra', precio: '1500', stock:'2'}
]

export const listaProductos = () => { 
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos)
        },2000)
    })
}


