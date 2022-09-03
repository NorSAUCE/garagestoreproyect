import '../../../Styles/buscador-desktop.css';
import { Link } from "react-router-dom";
import searchIcon from "../../../img/IconoBuscar.svg"
import filterIcon from "../../../img/botonFiltro.png"

function BuscadorDesktop ({buscar,handleBuscar}) {

 const setLocalValue = () =>{
    const input = document.querySelector("[data-search-bar]").value
    window.localStorage.setItem("searchValue",input);
    if(window.location.pathname === "/searchPage"){
      window.location.reload()
    } 
  }
  

    return ( 
            
    <div className="desktop-componente-buscador__container">
        <div className="desktop-search-filter__container">
          <div className="desktop-buscador-container">
              <Link to="/searchPage" onClick={setLocalValue} ><img src={searchIcon} alt="search" className="desktop-search-icon" /></Link>
            <input type="text" defaultValue={buscar} onChange={handleBuscar}  className="desktop-search-input"data-search-bar></input>
          </div>
        </div>
    </div>
  
    );
}
export default BuscadorDesktop;