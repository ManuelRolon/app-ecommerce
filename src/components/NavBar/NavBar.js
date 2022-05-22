import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'


const NavBar = () => {
    return (
        <nav>

            <div>
                <h1> E-COMMERCE</h1>
            </div>

            <div>
                <button className= 'inicio'>INICIO</button>
                <button className= 'menu'>AUTOS</button>
                <button className= 'menu'>CAMIONETA</button>
                <button className= 'menu' >CAMIONES</button>
            </div>

            <div style={{display: 'flex'}}>
                <button className= 'login' style={{marginRight: '30px' }}>LOGIN</button>
                <CarWidget />
            </div>


        </nav>
    )
}

export default NavBar