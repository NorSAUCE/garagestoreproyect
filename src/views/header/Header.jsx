import GsLogo from "../../img/gs-logo.png";
import UserLogo from "../../img/Icono-cuenta.png";
import Bars from "../../img/bars-menu.png";
import {Link} from 'react-router-dom';
import "../../Styles/header.css";

// ICONOS MENU HAMBURGUESA
import HomeIcon from "../../img/burger-menu-icons/home-icon.svg";
import HistoryIcon from "../../img/burger-menu-icons/history-icon.svg";
import FavIcon from "../../img/burger-menu-icons/favorite-icon.svg";
import NewsIcon from "../../img/burger-menu-icons/news-icon.svg";
import OffersIcon from "../../img/burger-menu-icons/offers-icon.svg";
import DonacionesIcon from "../../img/burger-menu-icons/donaciones-icon.svg";
import NewPubIcon from "../../img/burger-menu-icons/crear-publicacion-icon.svg";
import MyPubsIcon from "../../img/burger-menu-icons/mis-publicaciones-icon.svg";
import HelpIcon from "../../img/burger-menu-icons/ayuda-icon.svg";
import CloseSessionIcon from "../../img/burger-menu-icons/close-session-icon.svg";
import CloseMenuIcon from "../../img/burger-menu-icons/close-menu-icon.svg"
import LoginIcon from "../../img/burger-menu-icons/login-icon.svg"
import RegisterIcon from "../../img/burger-menu-icons/registro-icon.svg"



const Header = () => {
    const token = localStorage.getItem("token");
    let userConnected;
    if(token === "" || token === undefined || token == null){
        userConnected = false;
    } else {
        userConnected = true;
    }
    const setSectionName = (e) =>{
        localStorage.setItem("section",e.target.id);
        if(window.location.pathname === "/sectionResults"){
            window.location.reload()
        }
    }

    /// FUNCION QUE MUESTRA Y ANIMA EL MENU HAMBURGUESA

    const showNavMenu = () => {
        const navMenu = document.querySelector("[data-nav-menu]");
        const bars = document.querySelector("[data-bars]");

        if(navMenu.classList.contains("visible")){
            bars.style.transform = "scale(0)"
            navMenu.style.opacity = 0
            setTimeout(() => {
                navMenu.classList.remove("visible");
                bars.src = Bars
                bars.style.transform = "scale(1)"
            },200)
        } else {
            navMenu.classList.add("visible")
            bars.style.transform = "scale(0)"
            setTimeout(() => {
                navMenu.style.opacity = 1
                bars.src = CloseMenuIcon
                bars.style.transform = "scale(1)"
            },200)
        }
        
        }

        const closeSession = () => {
            localStorage.removeItem("token");
            window.location.reload();
        }
    
    return(
        <div className="header-container" data-header-container>
            <img src={Bars} onClick={showNavMenu} alt="imagen" id="bars-header" data-bars/>
            <Link to='/'><img src={GsLogo} alt="imagen" className="logo-principal"/></Link>       
            <Link to="/login" ><img src={UserLogo} className= "profile-icon" alt="imagen" data-profile ></img></Link>
            
            <div className="nav-menu__container" data-nav-menu>
                <ul className="container__list">
                   {!userConnected &&
                   <>
                    <li className="list__items"><img className="items__icon" src={LoginIcon}/><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><img className="items__icon" src={RegisterIcon}/><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HomeIcon}/>Inicio</Link></li>
                    
                    <li className="list__items" ><Link to='/sectionResults'onClick={setSectionName} id="recientes"><img className="items__icon" src={NewsIcon}/>Novedades</Link></li>
                    
                    <li className="list__items"  onClick={setSectionName}><Link to='/sectionResults' id="donaciones"><img className="items__icon" src={DonacionesIcon}/>Donaciones</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HelpIcon}/>Ayuda</Link></li>
                   </>
                   }
                   {userConnected &&
                   <>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HomeIcon}/>Inicio</Link></li>
                    
                    <li className="list__items"><Link to='/sectionResults'onClick={setSectionName} id="recientes"><img className="items__icon" src={NewsIcon}/>Novedades</Link></li>
                    
                    <li className="list__items" onClick={setSectionName}><Link to='/sectionResults' id="donaciones"><img className="items__icon" src={DonacionesIcon}/>Donaciones</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HelpIcon}/>Ayuda</Link></li>
                    
                    <li className="list__items"><Link to='/publicar'><img className="items__icon" src={NewPubIcon}/>Crear publicación</Link></li>
                    
                    <li className="list__items"><img className="items__icon" src={CloseSessionIcon} onClick={closeSession}/>Cerrar sesión</li>
                   </>
                    }   
                   
                    
                </ul>
            </div>
            

            <div className="nav-menu__container" data-profile-menu> 
                <ul className="container__list">
                    <li className="list__items"><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/publicar'>Donar</Link></li>
                   <li className="list__items"><Link to='/'>Contacto</Link></li>
                </ul>
            </div>

        </div>        
    )
}

export default Header