import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { conectadd, getall, GetByPassMail } from '../axios/users'
import Context from "../context"
import { user } from '../redux/action/UserAction'
import '../component/ganaral.css'

export const Login = () => {


    const [obj, setobj] = useState({})
    let y = useContext(Context)
    const send = async () => {
        debugger
        let realData = {
            "codeusr": 0,
            "firstName": obj.firstName,
            "lastName": obj.lastName,
            "mail": obj.mail,
            "passWord": obj.password
        }
        //קראתי לפונקציה שנמצאת באקסיוס ביוזרס
        let result = await conectadd(realData)
        if (result.data == true) {
            alert("sucssful!!")

            //קראתי לפונקציה נוספת שנמצאת באקסיוס ביוזרס 
            let s = await getall()
            y.setlistuser(s.data)
            y.setisuser(false)
            let user = await GetByPassMail(obj.mail, obj.password)
            y.setcodeuserobj(user.data)  
        }
    }



    return <div><br></br><br></br><br></br><br></br><div className="form-group container col-sm-5"style={{backgroundColor:"white",textAlign:'center'}}>
        
        <br></br>  <h2>טופס הרשמה</h2><br></br><h5>הכנס את הפרטים על מנת להיות רשום לאתר </h5>   <br></br>  <br></br> <br></br>  
        <input className="form-control" type={'text'} placeholder=" הכנס שם פרטי" onChange={(e) => setobj({ ...obj, firstName: e.target.value })}></input>
       
        <input className="form-control" type={'text'} placeholder="הכנס שם משפחה" onChange={(e) => setobj({ ...obj, lastName: e.target.value })}></input>
        
        <input className="form-control" type={'text'} placeholder="הכנס כתובת אימייל" onChange={(e) => setobj({ ...obj, mail: e.target.value })}></input>
        <h6>הכנס סיסמא עד 8 תוים עם אותיות ומספרים</h6>
        <input className="form-control" type={'number'} placeholder="הכנס סיסמא" onChange={(e) => setobj({ ...obj, password: e.target.value })}></input>
        
        
        <button className="btn btn-warning btn-block btn-lg" onClick={() => send()}>הרשם</button>
        <br></br></div>
    </div>
}
