import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getall, GetByPassMail } from "../axios/users"
import Context from "../context"
import '../component/ganaral.css'

export const Connect = () => {
  //פעם ראשונה לא עובד לא מזהה שהוא יוזר
  
  const mynavigate = useNavigate("")
  let [obj, setobj] = useState({})
  //משתנה ששולף את הנתונים מהטרנספר-קונטקס
  let y = useContext(Context)
  let myx=useNavigate()
//פונקציה שבודקת האם אתה קיים ברשימת משתמשים
  const func = async () => {


    if (y.listuser.length == 0) {
      let server_user = await getall()
      //alert(server_user,"מצאתי את DATA")
      //   setg(server_user.data)a
      
     y.setlistuser(server_user.data)

    }
  let user = await GetByPassMail(obj.mail, obj.password)
      y.setcodeuserobj(user.data)

    if (y.maneger == obj.password) {
      alert("שלום למנהל")
      y.setismaneger(false)
      y.setisuser(false)
    }
    //user 
   
     
      else if (y.codeuserobj.codeusr > 0) {
        alert("הצלחת להתחבר")
        y.setisuser(false)
        myx('../Home')
      }
      else {
        alert("הפרטים לא מופיעים במע")
        mynavigate('../Login')

      }

   
  }
  return <div><br></br><br></br><br></br><br></br><div className="form-group container col-sm-5" style={{textAlign:'center',backgroundColor:'white'}}><br></br>
    {/* <input type={'text'} placeholder="input firstname" onChange={(e) => setobj({ ...obj, firstname: e.target.value })}></input> */}
    {/* <input className="form-control" type={'text'} placeholder="input lastname " onChange={(e) => setobj({ ...obj, lastname: e.target.value })}></input> */}
    <br></br><br></br><br></br><h4>הכנס פרטים כדי להתחבר</h4><br></br>
    <input className="form-control" type={'password'} placeholder="הכנס סיסמא" onChange={(e) => setobj({ ...obj, password: e.target.value })}></input>
    <input className="form-control" type={'text'} placeholder="הכנס כתובת מייל" onChange={(e) => setobj({ ...obj, mail: e.target.value })}></input>
   <button className="btn btn-warning btn-block btn-lg" onClick={() => func()}>מתחבר</button>
   <br></br><br></br><br></br>
  </div>
</div>
}
// btn btn-warning