import PrimaryCards from "../home/component/PrimaryCards.jsx"

export const SearchResults = ({data}) => {

    return( 
    <div className="resultados-busqueda" data-search-results>
             {data.map((e)=> (<PrimaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={e.precio}id={e._id}/>))}
    </div>
    )
}

export default SearchResults