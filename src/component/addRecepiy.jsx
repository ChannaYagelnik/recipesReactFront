import { useContext } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getallingrid } from "../axios/ingrifiens"
//import { useParams } from "react-router-dom"
import { addRecepiy, getAll } from "../axios/recpy"
import Context from "../context"
import { Allrecepiy } from "../redux/action/recpieyAction"
import '../component/ganaral.css'

export const AddRecepiy = () => {
    debugger
   //הגדרת משתנים
   let y = useContext(Context)
    const [obj, setobj] = useState({
        "code": 0,
        "name": "",
        "discrib": "",
        "img": "",
        "levels": "",
        "time":"2023-12-19T08:32:18.388Z",
        "meals": 0,
        "instruction": "",
        "codeuser": y.codeuserobj.codeusr,
        "firstName": y.codeuserobj.firstName,
        "lastName": y.codeuserobj.lastName,
        "mail": y.codeuserobj.mail,
        "passWord": y.codeuserobj.passWord
    })
   
   
    const mydispach = useDispatch()
    const navigate=useNavigate()
    const send=async()=>{
        navigate('../AddRecepiy/ListingridAdd')
    }
    const myaddRecepiy = async () => {
        //הוספת מתכון
        //OBJ זה הפרטים שהמשתמש הכניס
        let realrecepy = {
           
        }

        debugger
        let result = await addRecepiy(obj)
        if (result.data != null) {
            alert("success")
            let s = await getAll()
            y.coderecepuy=result.data 
            mydispach(Allrecepiy(s.data))
        }


    }

    return(<div className="form-group container">
        <input className="form-control" type={'text'} placeholder="שם המתכון" onChange={(e) => setobj({ ...obj, name: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder="תאור המתכון" onChange={(e) => setobj({ ...obj, discrib: e.target.value })}></input>
        <select className="form-control" placeholder="name" onChange={(e) => setobj({ ...obj, levels: e.target.value })}>
            <option>קל</option>
            <option>בינוני</option>
            <option>קשה</option>
        </select >
        <input className="form-control" type={'file'} onChange={(e) => setobj({ ...obj, img: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder="זמן ההכנה" onChange={(e) => setobj({ ...obj, time: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder="כמות מנות" onChange={(e) => setobj({ ...obj, meals: e.target.value })}></input>
        <input className="form-control" type={'text'} placeholder="הוראות הכנה" onChange={(e) => setobj({ ...obj, instruction: e.target.value })}></input>
        <button className="btn btn-warning btn-block btn-lg" onClick={() => myaddRecepiy()}>הוספת  מתכון לרשימת המתכונים </button>
        {/* <input className="form-control" type={'text'} placeholder="input ingridentce" onChange={(e) => setingrid()}></input> */}
        {/* <button onClick={(e)=>funcplus()}>+</button> */}
        <br></br><br></br>
        <button className="btn btn-warning  btn-lg"style={{borderBlock:'24px'}}onClick={() => send()}>להכנסת רכיבי המתכון</button><Outlet></Outlet> 
        {/* <Link to={'ListingridAdd'}></Link> */}
    </div>)
}
    