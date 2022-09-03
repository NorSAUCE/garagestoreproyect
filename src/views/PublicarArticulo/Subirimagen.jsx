import {uploadFile} from '../firebase/config'
import {useState} from 'react'
import { render } from '@testing-library/react'
import { Swal } from 'sweetalert2'
import "../../Styles/SubirImagen.css"

const Subirimagen = ({getImgUrl}) => {

const [file,setFile] = useState(null)


   
const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const result = await uploadFile(file)
        const imgInput = document.querySelector("[data-img-input]")
        imgInput.name = result
        getImgUrl();
        // render(<span className='img-input-check'>COMPLETADO</span>) 
        alert("completado");
    } catch(error){
        console.log(error);
    }
   }
  
    return(
        <div className='row justify-content-start'>
            <div className='col-4 mr-2'>
                <form className='box-form' onSubmit ={handleSubmit}>
                    <div className="box-input__container">
                    <input className='box-input' type="file" name= " "  id = " " onChange={(e)=> setFile(e.target.files[0])} data-img-input/>
                    </div>
                </form>
            </div>
            <div className='col-4 align-self-center m-0 p-0'>
            <button className='btn btn-Upload' onClick={handleSubmit}>Upload</button>
            </div>
        </div>
)
}
export default Subirimagen