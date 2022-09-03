import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home.jsx';
import HomeDesktop from "./views/home/HomeDesktop"
import Login from './views/login/Login.jsx';
import Register from './views/register/Register.jsx'
import VerMas from './views/home/component/VerMas.jsx';
import PublicarArticulo from './views/PublicarArticulo/PublicarArticulo.jsx';
import SearchPage from './views/SearchResults/SearchPage.jsx';
import DetalleArticulo from './views/DetalleArticulo/DetalleArticulo.jsx';
import { Navigate } from 'react-router-dom';
import Header from './views/header/Header.jsx';
import CategoryResult from './views/CategoryResult/CategoryResult.jsx';
import SectionResult from './views/SectionResult/SectionResult.jsx';


function App() {

  const disableOverFlow = () => {
    const body = document.querySelector("body");
    if(window.location.pathname === "/register"  && window.innerWidth > 1024 || window.location.pathname === "/login"   && window.innerWidth > 1024){
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "auto"
    }
}

var mediaQuery = window.matchMedia("(min-width: 1024px)")


let handleDesktop = () => {
  if(mediaQuery.matches){
    return <HomeDesktop/>
  } else {
    return <Home/>
  }
  
}

window.addEventListener("resize", (e)=> {
    setTimeout(()=> window.location.reload(),500)
})
window.addEventListener("load", disableOverFlow)

const token = localStorage.getItem("token");
console.log(token)
  return (
  
    <BrowserRouter>
      <Routes>
        <Route  path='/' element= {handleDesktop()}></Route>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path='/login' element= { <Login/>}></Route>
        <Route path='/register' element= { <Register/> }></Route>
        <Route path='/vermas' element= { <VerMas/> }></Route>
        <Route path='/publicar' element= {token? <PublicarArticulo/> : <Login/>}></Route>
        <Route path='/searchPage' element= {<SearchPage/>}></Route>
        <Route path='/detallearticulo/:id' element= {<DetalleArticulo/>}></Route>
        <Route path='/catResult' element= {<CategoryResult/>}></Route>
        <Route path='/sectionResults' element= {<SectionResult/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


