import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { addRechivim, getspecipisingrud } from "../axios/ingrientRecepy"
import { getallingrid, postallingrid } from "../axios/ingrifiens"
import Context from "../context"
import { Allingrid } from "../redux/action/ingridentceAction"
import { Allingridbycoderecepy } from "../redux/action/recepyingridAction"
import '../component/ganaral.css'

export const ListingridAdd = () => {
    debugger
    const [obj2, setobj2] = useState({})
    //רשימה של הרכיבים שבדאטבייס
    const listingrid = useState([])
    let id
    let flag = 0
    let y = useContext(Context)
    const dmydispach = useDispatch()
    const mydispachingridrecepy = useDispatch()
    const Isend=useState(false)
    let ingridrecepy = []
    //רשימה של המוספים
    //let ingrid = []
    //שליפה מהרידקס רשימת חומרים
    const ingridredux = useSelector(k => k.ingridreducer.listingri)

    const addingrirecep = async () => {
        debugger
        //יוצרת רשימה של חומרים ומכניסה אותם לתוך מערך חומרים חדשים
        //
        let realDataingrid = {
            "codeIngrid": 0,
            "nameIngrid": obj2.ingrid
        }
        // ingrid.push(realDataingrid)
        if (ingridredux == 0) {
            let data_ingrid = await getallingrid()
            listingrid.data=data_ingrid.data
        }
        else {
            listingrid.data=ingridredux
        }
        // let leny=listingrid.data[length]
        // for (let i = 0; i < listingrid.data[i].length; i++) {
        //     if (listingrid.data[i].nameIngrid == obj2.ingrid) {
        //         id = listingrid.data[i].codeIngrid
        //         flag = 1
        //     }
        // }
       
        let m=listingrid.data.filter(n=>n.nameIngrid==obj2.ingrid)
        if(m==null)
        id=0
        else{
            id=m[0].codeIngrid 
            flag = 1
        }
        //אם לא קיים רכיב כזה אני מוסיפה
        if (flag == 0) {
            await postallingrid(realDataingrid)
            let data_ingrid = await getallingrid()
            listingrid.data=data_ingrid.data
            dmydispach(Allingrid(data_ingrid))
        }


    }

    let realDataingridrecepy = {
        "codeIingridRecpie": 0,
        "coderecpiey": y.coderecepuy,
        "codeIngrid": id,
        "amount": obj2.amount,
        "nameIngrid": obj2.ingrid
    }
    ingridrecepy.push(realDataingridrecepy)




const end = async () => {
    let resultrtr = await addRechivim(y.coderecepuy, ingridrecepy)
    if (resultrtr.data > 0) {
        alert("good")
        let jun = await getspecipisingrud(y.coderecepuy)
        mydispachingridrecepy(Allingridbycoderecepy(jun))
    }
}

return <div>
    <input className="form-control" type={'text'} placeholder="input ingrid" onChange={(e) => setobj2({ ...obj2, ingrid: e.target.value })}></input>
    <input className="form-control" type={'number'} placeholder="input amount" onChange={(e) => setobj2({ ...obj2, amount: e.target.value })}></input>
    {/* <button className="btn btn-outline-dark"onClick={() => addingrirecep()}>הוסף את הרכיב</button> */}
    <button className="btn btn-outline-dark" onClick={() => end()}>להוספת רכיב</button>
    <button className="btn btn-outline-dark" onClick={() => end()}>סיום</button>
</div>

}