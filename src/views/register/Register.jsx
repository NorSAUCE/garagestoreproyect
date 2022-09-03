import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"
import checkDone from "../../img/check.png"
import returnButton from "../../img/return.svg"
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import ilustracion from "../../img/ilustracion.png"

const Register = () => {

const [name,setName] = useState ("");
const [email,setEmail] = useState ("");
const  [tel,setTel]  = useState ("")
const [pass,setPass] = useState ("");
const [doublePass,setDoublePass] = useState ("");

//const form = document.querySelector("[data-register-form]");

    const createUser = async (e) => {
       e.preventDefault();
       if(pass !== doublePass){
        console.log("contraseñas no coinciden");
       } else {
 
           try {
            const object = {
                username: name,
                email: email,
                password: pass,
                telefono: tel
            };    
               console.log(object)
            const response = await fetch("https://afternoon-meadow-03259.herokuapp.com/auth/registro", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body:JSON.stringify(object),
            });
            const res = await response.json();
            showRegisterMessage();
            return res;
          } catch (error) {
        
            console.log(error);
          }
    }    
}
  
const navigate = useNavigate()


// FUNCION PARA REDIRECCIONAR AL LOGIN Y MOSTRAR MENSAJE DE ARRIBO CORREO
    
const showRegisterMessage = () =>{
    const message = document.querySelector("[data-message-container]")
    const cuerpo = document.querySelector("body");
    message.style.display = "block";
    message.style.height = `${cuerpo.clientHeight}px`;
    window.scrollTo(0,0)
    console.log(message);
}


return(  

    <div className="login__container__general">
        <div className="login__brand">
            <h4 className="login__brand-title">Vendé productos que ya no usas, desde tu casa</h4>
            <img src={ilustracion} alt="" className="login__brand-img" />
            <div className="login__brand-semicircle">
                <img src={GsLogo} alt="" className="semicircle__logo"/>
            </div>
        </div>
        
        <div className="login__functional">
    <div className="login__container" data-register-container>
        
        <div className="login__logo-container">
        <img src={returnButton} onClick={() => navigate("-1")} className="return-button" alt="" />
            <img className="logo__item" src={GsLogo}/>
        </div>
        <h2 className="container__title">Creá tu <span>cuenta</span></h2>
        <form className="input__container" data-register-form>
            <input type="email" className="input-container__item"  placeholder="Correo electrónico" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="text" className="input-container__item" id="user-input" placeholder="Nombre de usuario" value={name}  onChange={(e)=> setName(e.target.value)}required/>
            <input type="text" className="input-container__item" id="tel-input" placeholder="Teléfono" value={tel}  onChange={(e)=> setTel(e.target.value)}required/>
            <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" value={pass}  onChange={(e)=> setPass(e.target.value)} required/>
            <input type="password" className="input-container__item" id="second-pass-input" placeholder="Repetir contraseña" value={doublePass}  onChange={(e)=> setDoublePass(e.target.value)} required/>
            <button className="input-container__button" onClick={createUser}>Crear cuenta</button>
        </form>
        <img src={Separador} alt="" className="login__separador"/>
        <div className="redes__container">
            <div className="redes__img-container">
                <img src={FacebookLogo} alt="Facebook"  />
            </div>
            <div className="redes__img-container">
                <img src={GoogleLogo} alt="Google"  />
            </div>
        </div>
    
        <div className="message-container" data-message-container>
            <div className="message-container__box">
                <h4 className="message-container__title">¡Felicitaciones!</h4>
                <img className="message-container__img" src={checkDone}/>
                <h5 className="message-container__sub-title">Tu cuenta fue creada con exito.</h5>
                <p className="message-container__details">Enviamos un mail a tu correo</p>
                <Link to="/login" ><button className="message-container__button">Iniciar Sesion</button></Link>
            </div>
        </div>
    </div>
    </div>
    
    </div>
)

}
export default Register