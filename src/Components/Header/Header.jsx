
import NavDestock from "./NavDestock";
import HeaderTexto from "./HeaderTexto";
import '../../sass/header/header.scss'
const Header =(props)=>{
    
    return(
        <header className="header">
            
            <NavDestock cambiarMostrar={props.cambiarMostrar}/>
            <HeaderTexto/>
        </header>
    )
}
export default Header;