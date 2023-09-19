
import Logo from '../../assets/images/Logo.svg'
import Close from '../../assets/images/icon-close.svg'

import '../../sass/navBarMovil/navBarMovil.scss'
const NavBarMovil =(props)=>{
    return(
        <div className='navMovil'>
            <div className="navMovil__icon">
                <h1><img className='navMovil__icon--logo' src={Logo} alt="logo" /></h1>
                <img className='navMovil__icon--close' src={Close} alt="icon close" onClick={props.cambiarMostrar} />
            </div>
            <nav >
                <ul className='navMovil__navegacion'>
                    <li className='navMovil__navegacion--link'><a href="#">Abaut</a></li>
                    <li className='navMovil__navegacion--link'><a href="#">Carrers</a></li>
                    <li className='navMovil__navegacion--link'><a href="#">Events</a></li>
                    <li className='navMovil__navegacion--link'><a href="#">Products</a></li>
                    <li className='navMovil__navegacion--link'><a href="#">Support</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBarMovil;