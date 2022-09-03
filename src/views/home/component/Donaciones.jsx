import React , { useEffect, useState } from "react";
//import Pin from '../../../img/Pin.png';
import Corazon from '../../../img/corazon.png';
//import Prueba2 from '../../../img/Prueba2.png'
import '../../../Styles/Donaciones.css'
import PrimaryCards from "./PrimaryCards";

function Donaciones () {
    
    const [data,setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "https://afternoon-meadow-03259.herokuapp.com/articulos/donaciones",{
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
       
       const handlePrev = () => {
       
    }

    const handleNext = () =>{

    }

       
    return ( 
        <div className="row justify-content-center box-donaciones">
            <div className="col-12 mt-2 container-desktop__relative">
                <div className="row justify-content-center donaciones-start">
                    <div className="col-1">
                        <img src= { Corazon } alt="corazon"/>
                    </div>
                    <div className="col-7">
                        <h3>Donaciones</h3>
                    </div>
                </div>
                <div className="donation__cards-container desktop-cards-containers">
                {data.map((e)=> (<PrimaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} id={e._id}/>))}
                </div>
                <div className="desktop-cards-buttons">
                    <button className="desktop-button-left" onClick={handlePrev}>🡨</button>
                    <button className="desktop-button-right" onClick={handleNext}>🡪</button>
                </div>
            </div>
        </div>


    )
}

export default Donaciones ;

