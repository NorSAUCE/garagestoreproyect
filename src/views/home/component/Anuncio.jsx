import React from "react";
import '../../../Styles/Anuncio.css';
import AnuncioIcon from '../../../img/Imagen.png';
import Cross from '../../../img/Grou.png';

function Anuncio ( ) {
    return ( 
        <div className="container  anuncio-container">
            <div className="box-anuncio row row justify-content-center ms-1 border border-1">
                <div className="col-2 align-self-center ms-0">
                    <div className="img row justify-content-start">
                    <div className="col-3 img"><img className="anuncio-img" src={AnuncioIcon} alt="Icon-anuncio"/></div>
                    </div>
                </div>
                <div className="col-8 mt-4 ms-0">
                    <div className="row justify-content-center">
                        <div className="col-12 align-self-center ms-5">
                            <div className="row row-cols-1 justify-content-start">
                                    <div className="col-12 m-0">
                                        <h1>¡Animate a donar!</h1>
                                    </div>
                                    <div className="col-12">
                                        <h4>Esos artículos que tenes en desuso pueden servirle a otra persona.</h4>
                                    </div>
                                    <div className="row justify-content-end m-2 mb-3">
                                        <div className="button-donar col-8 col-md-4 col-lg-2">
                                            <button className="btn-donar">¡Quiero donar!</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 cross-anuncio">
                    <button className="border border-0"><img className="img-fluid" src= {Cross} alt="exit"/></button>
                </div>
            </div>
        </div>
    );
}

export default Anuncio;