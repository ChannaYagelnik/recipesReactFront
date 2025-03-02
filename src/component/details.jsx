import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAll } from "../axios/recpy"
import { getspecipisingrud } from "../axios/ingrientRecepy"
import { Allrecepiy } from "../redux/action/recpieyAction"
import { Allingridbycoderecepy } from "../redux/action/recepyingridAction"
import '../component/ganaral.css'

export const Details = () => {
  //שליפת קוד מתכון שנשלח מעמוד הבית 
  const params = useParams("")
  const [data, setdata] = useState([])
  const [dataingrid, setdataingrid] = useState([])
  //שליפה מרידקס את כל חומרים למתכון
  let fingrid = useSelector(k => k.recepyingridReduser.listingridbycode)
  //שליפה מרידקס את כל מתכונים
  let f = useSelector(k => k.recpiysReducer.listRecpiy)
  let mydispachingrid = useDispatch()
  let mydispachinrecepy = useDispatch()
  useEffect(() => {
    async function fetchData() {
      //האם כבר קיים ברידקס
      if (f.length > 0) {
        //רק תכניס לתוך המשתנה הזמני שיצרתי
        setdata(f)
      }
      else {
       
        let data_of_server = await getAll()
        
        setdata(data_of_server)
        //שליחה לרידק את כל המתכונים
        mydispachinrecepy(Allrecepiy(data_of_server.data))
      }
    }
    async function fetchData1() {
//שליפת חומרים למתכון כיד להוציא בהמשך את הרכיבים
      let data_of_server_ingrid = await getspecipisingrud(params.code)
      setdataingrid(data_of_server_ingrid.data)
      //שיגור לרידקס
      mydispachingrid(Allingridbycoderecepy(data_of_server_ingrid.data))
      //}
    }
    fetchData();
    fetchData1();
  }, [])
  return <div class="container" style={{ textAlign: 'center', marginRight: '6%' }}><br></br>{data.filter((e) => e.code == params.code).map(l => (
    <p>
      {/* הצגת הפרטים שנמצאים בטבלת מתכונים לפי התנאי */}
      <h2 style={{ textAlign: 'center' }}>{l.name}</h2>
      <p>{l.discrib}</p>
      <div class="card" style={{ width: '600px' }}>
        <img class="card-img-top" src={`https://localhost:7245/pic/${l.img}`} alt="Card image" style={{ width: '100%' }}></img>
        <div class="card-body">
          <p class="card-text">{l.levels} רמה</p>
          <p class="card-text">{l.time} זמן הכנה</p>
          <p class="card-text">{l.meals} מספר מנות </p>
          <p class="card-text">{l.instruction}  הוראות הכנה </p>
          <h4 class="card-title" style={{ textAlign: "center" }}>רכיבים</h4>

          <p>{dataingrid.map(l => (<p style={{ textAlign: "center" }}><h9 class="card-text" style={{ textAlign: "right" }}>{l.amount}</h9>
            --<h9 class="card-text" style={{ textAlign: "center" }}>{l.nameIngrid}</h9></p>))} </p> </div>
      </div>

      <br></br>

    </p>))}
  </div>
  // btn btn-warning
}
{/* <div class="container">
  <h2>Card Image</h2>
  <p>Image at the top (card-img-top):</p>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  <br></br> */}
//   <div class="container row"><div class="card col-sm-10" style={{ width: 1000, textAlign: "center" }} > {data.filter((e) => e.code == params.code).map(l => (
//     <p>
//         <h4 class="card-title" style={{ textAlign: "center" }}>{l.name}</h4>
//         <img class="card-img-left" alt="Cinque Terre" style={{ width: 300 }} src={`https://localhost:7245/pic/${l.img}`}></img>
//         <h6 class="card-text" >רמה-<h9 class="card-text">{l.levels}</h9></h6>
//         <h6 class="card-text" >תאור-<h9 class="card-text">{l.discrib}</h9></h6>
//         <h6 class="card-text" >זמן הכנה-<h9 class="card-text">{l.time}</h9></h6>
//         <h6 class="card-text">מס מנות-<h9 class="card-text">{l.meals}</h9></h6>
//         <h6 class="card-text">הוראות הכנה-<h9 class="card-text">{l.instruction}</h9></h6>
//        </p>))}

{/* <h6  class="card-text" style={{textAlign:"center"}}>רכיבים</h6>
<p>{dataingrid.map(l=>(<p style={{textAlign:"center"}}><h9 class="card-text" style={{textAlign:"right"}}>{l.amount}</h9>
--<h9 class="card-text" style={{textAlign:"center"}}>{l.nameIngrid}</h9></p>))} </p> */}