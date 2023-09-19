
import loop from "../../assets/images/Logo.svg"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import "../../sass/footer/footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logos">
        <img src= {loop} alt="logo-del-footer"/>
        <div className="footer__logos__redes-sociales">
          <img src={facebook} alt="logo-facebook" />
          <img src={instagram} alt="logo-instagram " />
          <img src={pinterest} alt="logo-pinterest" />
          <img src={twitter} alt="logo-twitter" />
        </div>
      </div>
      <div className="footer__texto">
            <nav>
                <ul className='footer__texto__navegacion'>
                    <li className='footer__texto__navegacion--link'><a href="#">Abaut</a></li>
                    <li className='footer__texto__navegacion--link'><a href="#">Carrers</a></li>
                    <li className='footer__texto__navegacion--link'><a href="#">Events</a></li>
                    <li className='footer__texto__navegacion--link'><a href="#">Products</a></li>
                    <li className='footer__texto__navegacion--link'><a href="#">Support</a></li>
                </ul>
            </nav>
             <p className="footer__texto--parrafo">2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
    
  )
}
export default Footer