import { useContext } from "react"
import Context from "../context"
import '../component/ganaral.css'
//הצגת רשימת משתמשים למנהל
export const Listuser=()=>{
    let y=useContext(Context)
   //עיצוב כללי טבלה
    return<div style={{textAlign:'center'}}><br></br><br></br><div class="container">
      <br></br>
      <h3>רשימת משתמשים</h3>
      <br></br><br></br><br></br>
        <table class="table">
        <thead >
      <tr>
        <th>קוד משתמש</th> 
        <th>שם משפחה</th>
        <th>שם פרטי</th>
       <th>כתובת מייל</th>
        <th>סיסמא</th>
      </tr>
    </thead>
    {/* עוברת על רשימת משתמשים */}
    <tbody>{y.listuser.map((e)=><tr>
        <td>{e.codeusr}</td>
        <td>{e.lastName}</td>
        <td>{e.firstName}</td>
        <td>{e.mail}</td>
        <td>{e.passWord}</td>
        </tr>)}
    </tbody></table></div></div>
} 
