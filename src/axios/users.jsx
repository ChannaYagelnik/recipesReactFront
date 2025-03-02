import axios from "axios"

let url="https://localhost:7245/api/user/"
//קבלת כל המשתמשים בעמוד רשימת משתמשים משתמשים בפונקציה הזאת
export const getall=async()=>{
    try
    {
        let data=await axios.get(`${url}mygetall`)
        return data
    }
    catch(err)
    {
        alert(err)
        console.log(err)
    }
}

//https://localhost:7245/api/user/mygetall
//הוספת משתמש בפועל מהדטבייס

export const conectadd= async(object)=>{
    debugger
try
{
    //שם הפונקציה שנמצא לי בweb 
    let data=await axios.post(`${url}myadd`,object)
    return data
}
catch(err)
{
    alert(err)
    console.log(err)
}
}
//כאשר המשתמש מתחבר מכניס מייל וסיסמא משתמש בפונקציה זאת שבודקת האם קיים כזה משתמש ברשימה
export const GetByPassMail=async(mail,pass)=>{
    debugger
    try
    {
        //שם הפונקציה שנמצא לי בweb 
        let data=await axios.get(`${url}mygetid/${pass}/${mail}`)
        return data
    }
    catch(err)
    {
        alert(err)
        console.log(err)
    }
    }
    