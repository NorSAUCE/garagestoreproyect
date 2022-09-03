import Buscador from "../home/component/Buscador"
import SearchResults from "./SearchResults";
import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import Header from "../header/Header";
import HeaderDesktop from "../header/HeaderDesktop";

export const SearchPage = () => {
    const localValue = window.localStorage.getItem("searchValue");
    const [data,setData] = useState([]);
    const [buscar,setBuscar] = useState(localValue)

    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "https://afternoon-meadow-03259.herokuapp.com/articulos/buscarnombre/?buscar="+buscar,{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json',
                },
                }
              );
      
              const res= await response.json()
              setData(res)
             
            } catch (err) {
              console.log(err);
            }
          };
          fetchData()
       }, [buscar])

       const handleBuscar=(e)=>{
        const value = e.target.value
        setBuscar(value)
       
    }

    const showResults = () => {
      render(<SearchResults data={data}/>)
    }

  
    
    return(
    <div>
        {window.innerWidth < 1024? <Header/> : <HeaderDesktop/>}
        {window.innerWidth < 1024? <Buscador buscar={buscar} showResults={showResults} handleBuscar={handleBuscar} /> : null}
        <SearchResults data={data}/>
    </div>
    )
    
}

export default SearchPage