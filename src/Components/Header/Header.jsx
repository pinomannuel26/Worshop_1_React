import NavDestock from "./NavDestock";
import HeaderTexto from "./HeaderTexto";
import '../../sass/header/header.scss'
const Header =()=>{
    return(
        <header className="header">
            <NavDestock/>
            <HeaderTexto/>
        </header>
    )
}
export default Header;