import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import MenuHamburgesa from '../../assets/images/icon-hamburger.svg'
import '../../sass/header/navDestock.scss'
const NavDestock = (props)=>{
    const items = [
        'About',
        'Carrers',
        'Events',
        'Products',
        'Support'
    ]
    return(
        <div className='navDestock'>
            <h1><img className='navDestock--logo' src={Logo} alt="logo" /></h1>
            <img className='navDestock--menuHamburguesa' src={MenuHamburgesa} alt="menuHamburguesa" onClick={props.cambiarMostrar} />
            <nav >
                <ul className='navDestock__navegacion'>
                    {items.map((item,index)=>{
                        return <li key={index} className='navDestock__navegacion--link'><Link to={item}>{item}</Link></li>
                    })
                    }    
                </ul>
            </nav>
        </div>
    )
}
export default NavDestock;