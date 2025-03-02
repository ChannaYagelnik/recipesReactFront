import { BrowserRouter } from "react-router-dom"
import { Route, Router, Routes } from "react-router-dom"
import { AddRecepiy } from "./addRecepiy"
import { Connect } from "./connect"
import { Details } from "./details"
import { Home } from "./home"
import { ListingridAdd } from "./listingridAdd"
import { Listuser } from "./listuser"
import { Login } from "./login"
import { Nav } from "./nav"
export const Routing=()=>{
    return<BrowserRouter>
        <Nav></Nav>
      <Routes>
      <Route path="Home" element={<Home></Home>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="AddRecepiy" element={<AddRecepiy></AddRecepiy>}>
      <Route path="ListingridAdd" element={<ListingridAdd></ListingridAdd>}></Route>
      </Route>
      
      <Route path="Conect" element={<Connect></Connect>}></Route>
      <Route path="Login" element={<Login></Login>}></Route>
     
     <Route path="Details/:code" element={<Details></Details>}></Route>
      <Route path="Listuser" element={<Listuser></Listuser>}></Route>
     
     </Routes> 
</BrowserRouter>


}