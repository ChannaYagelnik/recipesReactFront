import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAll } from "../axios/recpy";
import { Allrecepiy } from "../redux/action/recpieyAction";
import {listRecpiy} from '../redux/reduser/recpiysReducer'
import '../component/ganaral.css'

export const Home=()=>{
   const [data,setdata]=useState([])
   //משתנה לניתוב ישיר
   const mynavigate=useNavigate()
  //משתנה נוסף לניתוב ישיר
   const mycodrecepynavigate=useNavigate()
    //שליפת המתכונים מהרידקס כדי לבצע בדיקה האם כבר נשלפו מהדאטבייס
   let f = useSelector(k=>k.recpiysReducer.listRecpiy)
   //שיגור בהמשך
    let mydispach=useDispatch()
   
    async function fetchData(){
    //בדיקה האם יש ערך בתוך המערך שנשלף מהרידקס
    //כלומר האם כבר שלפו מהדטבייס  רשימה זו ואז לא צריך לגשת שוב
    if(f.length>0)
    {
        setdata(f)
    }
    else
    { 
        //שליפת כל המתכונים
      let data_of_server=await getAll()
      
      setdata(data_of_server.data)
      //שיגור לרידקס
      mydispach(Allrecepiy(data_of_server.data))
    }
    } 
    //בעת טעינה
    useEffect(()=>{
        
        fetchData()

    },[])
    //פונקציה ששלוחת את קוד המתכון כדי לשלוף לפין את כל הפרטים מחומרים למתכון
    const fNitov=(code1)=>{
        //קוד המתכון
        alert(code1)
        //הולך לעמוד פרטים נוספים
        mynavigate(`../Details/${code1}`)
    }
   return<div style={{margin:"60px"}} class="container col"><div class="mt-3 row "style={{textAlign:'center',marginRight:'6%',margin:"20px"}}>
    {/* הצגת עמוד הבית */}
    
 {data.map(l=>( <p>
    
    
    <div class="card " style={{width:'400px',margin:"6px"}}>
      <img class="card-img-top" src={`https://localhost:7245/pic/${l.img}`} alt="Card image" style={{width:'100%'}}></img>
      <div class="card-body">
      <h2 style={{textAlign:'center'}}>{l.name}</h2>
      <p>{l.discrib}</p>
      <p class="card-text">{l.levels} רמה</p>
      <button className="btn btn-outline-info"  onClick={()=>fNitov(l.code)}>פרטים נוספים</button>
   </div>
    </div>
   <br></br> 
      </p>))}
      <Outlet></Outlet>
    </div></div>
}


// fontFamily:'revert'
// background-color:#f32d68;
{/* <div class="container"style={{textAlign:'center',marginRight:'6%'}}><br></br>{data.filter((e) => e.code == params.code).map(l => (
  <p>
    <h2 style={{textAlign:'center'}}>{l.name}</h2>
    <p>{l.discrib}</p>
    <div class="card" style={{width:'600px'}}>
      <img class="card-img-top" {`https://localhost:7245/pic/${l.img}`} alt="Card image" style={{width:'100%'}}></img>
      <div class="card-body">
      <p class="card-text">{l.levels} רמה</p>
      <button className="btn btn-outline-info"  onClick={()=>fNitov(l.code)}>פרטים נוספים</button>
   
      
</div>
    </div>
   <br></br> 
      
      </p>))}  
</div> */}
// {data.map(l=>( 
//   <div className="card col-sm-2" style={{textAlign:"center",fontFamily:'revert',backgroundColor:'#bed440'}}>
//  {/* <br></br><br></br><br></br> */}
//   <h5>{l.name}</h5>
//   <p><img src={`https://localhost:7245/pic/${l.img}`} width='80%'></img></p>
//   <p style={{textAlign:"center",fontFamily:'sans-serif'}}>{l.levels }רמה  </p>
//   <button className="btn btn-outline-info"  onClick={()=>fNitov(l.code)}>פרטים נוספים</button>
//   </div>))}