import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../context"
import '../component/ganaral.css'

{/* <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
    </li> */}
export const Nav=()=>{
    let y=useContext(Context)
   
return <div className="mynav">
<nav className="navbar navbar-expand-md bg-dark navbar-dark" >

    <a className="nav-link"  style={{backgroundColor:"#ffab3c"}} hidden={y.isuser}>אתה מחובר {y.codeuserobj.firstName} {y.codeuserobj.lastName} </a>
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav nav-pills ">
            <li className="nav-item">
                <Link className="nav-link" to={'Home'}> דף הבית</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" hidden={y.isuser} to={'AddRecepiy'}> הוספת מתכון</Link>
            </li>
             <li className="nav-item">
                <Link className="nav-link" hidden={y.ismaneger} to={'Listuser'}>רשימת משתמשים</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'Conect'}>התחבר</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'Login'}>הרשם </Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to={'ListingridAdd'}>יצירת מערך</Link>
            </li> */}
            {/* <li className="nav-item" style={{background:"pink"}}>
                <Link className="nav-link" style={{color:"black"}} hidden={y.isuser} > אתה מחובר {y.codeuserobj.firstName} {y.codeuserobj.lastName}  </Link>
            </li> */}
        </ul>
    </div>
</nav>
</div>
}