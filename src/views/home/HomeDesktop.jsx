import HeaderDesktop from "../header/HeaderDesktop"
import Anuncio from "./component/Anuncio";
import Novedades from "./component/Novedades";
import "../../Styles/slider-buttons.css"
import '../../Styles/Home.css';
import Donaciones from "./component/Donaciones";
import Slider from "./component/Slider"

const HomeDesktop = () => {
    // VARIABLE SLIDER
    
   
    

    return(
        <div className="home__container" id="home__element2">
            <HeaderDesktop/>
            <Novedades /> 
            <Donaciones />
        </div>
    )
}

export default HomeDesktop;