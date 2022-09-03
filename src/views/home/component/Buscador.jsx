import '../../../Styles/Buscador.css';
import { Link } from "react-router-dom";
import searchIcon from "../../../img/IconoBuscar.svg"
import filterIcon from "../../../img/botonFiltro.png"

function Buscador ({buscar,showResults,handleBuscar}) {

 const setLocalValue = () =>{
    const input = document.querySelector("[data-search-bar]").value
    window.localStorage.setItem("searchValue",input)
  }
  

    return ( 
            
    <div className="componente-buscador__container">
        <div className="search-filter__container">
          <div className="buscador-container">
              <Link to="/searchPage" onClick={setLocalValue} ><img src={searchIcon} alt="search" className="search-icon-buscador" /></Link>
            <input type="text" defaultValue={buscar} onChange={handleBuscar}  data-search-bar></input>
          </div>
       
        </div>
    </div>
  
    );
}
export default Buscador;