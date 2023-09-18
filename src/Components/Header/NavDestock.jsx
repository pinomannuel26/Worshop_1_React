import Logo from '../../assets/images/Logo.svg'
import MenuHamburgesa from '../../assets/images/icon-hamburger.svg'
import '../../sass/header/navDestock.scss'
const NavDestock = ()=>{
    return(
        <div className='navDestock'>
            <h1><img className='navDestock--logo' src={Logo} alt="logo" /></h1>
            <img className='navDestock--menuHamburguesa' src={MenuHamburgesa} alt="menuHamburguesa" />
            <nav >
                <ul className='navDestock__navegacion'>
                    <li className='navDestock__navegacion--link'><a href="#">Abaut</a></li>
                    <li className='navDestock__navegacion--link'><a href="#">Carrers</a></li>
                    <li className='navDestock__navegacion--link'><a href="#">Events</a></li>
                    <li className='navDestock__navegacion--link'><a href="#">Products</a></li>
                    <li className='navDestock__navegacion--link'><a href="#">Support</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavDestock;