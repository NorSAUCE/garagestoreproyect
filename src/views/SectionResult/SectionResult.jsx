import { useState,useEffect } from "react";
import PrimaryCards from "../home/component/PrimaryCards";
import "../../Styles/category-results.css"
import HeaderDesktop from "../header/HeaderDesktop";
import Header from "../header/Header";
export const SectionResult = () => {

    const [data,setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {

              const section = localStorage.getItem("section")
                  
              const response = await fetch(
                `https://afternoon-meadow-03259.herokuapp.com/articulos/${section}`,{
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
       }, [])
       
       console.log(data)
       
    return (
      <>
      {window.innerWidth < 1024? <Header/> : <HeaderDesktop/>}
        <div className="category-result__container">
            {data.map((e) => (<PrimaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={e.precio}id={e._id}/>))}
        </div>
        </>
    )
}

export default SectionResult