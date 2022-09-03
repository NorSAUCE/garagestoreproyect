import Pin from '../../../img/Pin.png';
import "../../../Styles/Secondary-cards.css"
import {showDetails} from "../../../App.js"
import { Link } from 'react-router-dom';
import "../../../Styles/cards-desktop.css"
export const SecondaryCards = ({imgURL,productName,productLocation,productPrice,id}) => {

    
    return(
                            <div className="card-container card-responsive" >
                                    <div className="card__img-container">
                                        <Link to={'/detallearticulo/'+ id}><img src= {imgURL} className="img-container__img" alt="producto"/></Link>
                                    </div>
                                    
                                    <div className="card__text-container">
                                    <Link to={'/detallearticulo/'+ id}> <h6 className="card-title">{productName}</h6></Link>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p>    
                                        <p className="price card-text">{productPrice}</p>
                                    </div>
                            </div>
               
    )
};

export default SecondaryCards