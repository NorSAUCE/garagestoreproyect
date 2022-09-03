import { useState,useEffect } from "react";
import PrimaryCards from "../home/component/PrimaryCards";
import "../../Styles/category-results.css"
import HeaderDesktop from "../header/HeaderDesktop";

export const CategoryResult = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "https://afternoon-meadow-03259.herokuapp.com/articulos/",{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json',
                },
                }
              );
      
              const res= await response.json()
              setData(res.docs)
             
            } catch (err) {
              console.log(err);
            }
          };
          fetchData()
       }, [])
       
       
       const categoriasFiltradas = data.filter((e) => e.categoria._id == localStorage.getItem("categoria"));
       console.log(data);

     
       
    return (
      <>
        <HeaderDesktop/>
        <div className="category-result__container">
            {categoriasFiltradas.map((e) => (<PrimaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={e.precio}id={e._id}/>))}
        </div>
      </>
    )
}

export default CategoryResult