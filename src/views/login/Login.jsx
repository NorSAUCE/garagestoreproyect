import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"
import returnButton from "../../img/return.svg"
import "../../Styles/login-register.css"
import { useState}  from "react"
import ilustracion from "../../img/ilustracion.png"
import { Link } from "react-router-dom"

const Login = () => {
    
    const [email,setEmail] = useState ("");
    const [pass,setPass] = useState ("");

    const validateUser = async (e) => {
        e.preventDefault();
        try {
            const object = {
                email: email,
                password: pass,
            };    
            const response = await fetch("https://afternoon-meadow-03259.herokuapp.com/auth/login", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
                'x-access-token':localStorage.getItem("token")
              },
              body:JSON.stringify(object),
            });
            const res = await response.json()
            .then((result)=>{
                console.log(result)
                localStorage.setItem('token',result.token)
                window.location.pathname = "/";
            })
          
            return res
           
    } catch (error){
        console.log(error)
    }
}

const handleReturn = () => {
    window.location.pathname = "/";
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
                <div className="login__container">
                    <div className="login__logo-container">
                        <img src={returnButton} onClick={handleReturn} className="return-button" alt="" />
                        <img className="logo__item" src={GsLogo}/>
                    </div>
                    <h2 className="container__title">Ingresá a tu <span>cuenta</span></h2>
                    <form className="input__container">
                        <input type="text" className="input-container__item" id="email-input" placeholder="Correo electrónico" onChange={(e)=> setEmail(e.target.value)} required/>
                        <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" onChange={(e)=> setPass(e.target.value)} required />
                        <a href="#" className="input-container__link">¿Olvidaste tu contraseña?</a>
                        <button className="input-container__button" onClick={validateUser}>Iniciar sesión</button>
                    </form>
                    <img src={Separador} alt="" className="login__separador"/>
                    <div className="redes__container">
                        <div className="redes__img-container">
                            <img src={FacebookLogo} alt="Facebook"  />
                        </div>
                        <div className="redes__img-container">
                            <img src={GoogleLogo} alt="Google"/>
                        </div>
                    </div>
                    <p className="login__crear-cuenta">¿No tienes cuenta? <Link to="/register">Creala gratis acá</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login