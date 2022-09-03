import Pin from '../../../img/Pin.png';
import "../../../Styles/Primary-cards.css"
import { Link } from 'react-router-dom';
import "../../../Styles/cards-desktop.css"
export const PrimaryCards = ({imgURL,productName,productLocation,id}) => {
    return(

                        <div className="primary__card-container card-responsive">
                            <div className='primary__card__img-container'>
                                 <Link to={'/detallearticulo/'+ id}><img src= {imgURL} className="img-container__img" alt="product-1"/></Link>
                            </div>
                            
                            <div className="primary__card__text-container">
                                <Link  className="text-container__title" to={'/detallearticulo/'+ id}> <h5 className="text-container__title">{productName}</h5></Link>
                                <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p> 
                            </div>
                        </div>

    )
}

export default PrimaryCards