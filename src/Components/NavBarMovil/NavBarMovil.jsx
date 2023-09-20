
import Logo from '../../assets/images/Logo.svg'
import Close from '../../assets/images/icon-close.svg'

import '../../sass/navBarMovil/navBarMovil.scss'
const NavBarMovil =(props)=>{
    const items = [
        'About',
        'Carrers',
        'Events',
        'Products',
        'Support'
    ]
    return(
        <div className='navMovil'>
            <div className="navMovil__icon">
                <h1><img className='navMovil__icon--logo' src={Logo} alt="logo" /></h1>
                <img className='navMovil__icon--close' src={Close} alt="icon close" onClick={props.cambiarMostrar} />
            </div>
            <nav >
                <ul className='navMovil__navegacion'>
                    {items.map((item,index)=>{
                            return <li key={index} className='navDestock__navegacion--link'><a href="#">{item}</a></li>
                        })
                    } 
                </ul>
            </nav>
        </div>
    )
}
export default NavBarMovil;