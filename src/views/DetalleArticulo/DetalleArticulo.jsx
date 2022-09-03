import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import '../../Styles/DetalleArticulo.css';
import corazon from '../../img/Heart.png';
import ScrollImg from './components/ScrollImg'
import Ubicador from '../../img/Pin.png'
import WsIcon from "../../img/ws-icon.svg"
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
import HeaderDesktop from "../header/HeaderDesktop";


function DetalleArticulo() {

const id = useParams();

const [data,setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                `https://afternoon-meadow-03259.herokuapp.com/articulos/${id.id}`,{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json'
                },
                }
              );
      
              const res= await response.json();
              setData(res);
                
            } catch (err) {
              console.log(err);
            }
          };
          fetchData();
       }, [id])

       console.log(data)

      const token = localStorage.getItem("token")
     
    
       
       

    const handleWhatsAppButton = () => {
        if(token){
            window.location = `https://wa.me/${data ? data.usuario.telefono : null}/?text=Hola,%20me%20gustaria%20contactar%20contigo%20por%20este%20articulo:%20${data ? data.nombreArticulo: null}%20${window.location}`
        } else {
            window.location.pathname = "/login"
        }
    }

  return (
    <div>
        {window.innerWidth < 1024? <Header/> : <HeaderDesktop/>}
        <div className='article-detail-container'>
            <div className='row-cols-1 justify-content-start'>
                <div className='col-5'>
                    <h3 className='text-bold'>{data ? data.nombreArticulo : "Cargando..."}</h3>
                </div>
                <div className='row'>
                    
                    <div className='col-8'>
                        <p className='ph'>{data ? data.ubicacion.provincia + ", " + data.ubicacion.localidad : "Cargando..."}</p>
                    </div>
                </div>
                <div className='col-11'>
                    <ScrollImg imgURL={data ? data.imagen : "Cargando..."}/>
                </div>
                <div className='row justify-content-end'>
              
                </div>
                <div className='row'>
                    <div className='col-9'>
                        <h4>Informacion del producto</h4>
                    </div>
                    <div className='col-10 mt-1'>
                        <p className='instrucciones'>Dimensiones (Alto x Ancho): <b>{data ? data.dimension.alto : "Cargando..."} x {data ? data.dimension.ancho : "Cargando..."} cm</b> </p>
                    </div>
                    <hr/>
                    <div className='col-10'>
                        <p className='instrucciones'>Material: <b>{data ? data.material : "Cargando..."}</b> </p>
                    </div>
                    <hr/>
                    <div className='col-8 mb-2'>
                        <p className='instrucciones'>Unidades: <b>{data ? data.unidades : "Cargando..."}</b> </p>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col'>
                            <p className='instrucciones__precio'>Precio</p>
                            <p className='price'><b>${data ? data.precio : "Cargando..."}</b></p>
                        </div>
                        <div className='col'>
                            <button onClick={handleWhatsAppButton} className="ws-button"><img className="ws-icon" src={WsIcon} />WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetalleArticulo