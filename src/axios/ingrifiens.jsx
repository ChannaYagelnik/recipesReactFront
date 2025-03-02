import axios from "axios"

let url="https://localhost:7245/api/ingridentce/"
export const getallingrid=async()=>{
    try{
   let data=await axios.get(`${url}mygetall`)
   return data
    }
    catch(ex)
    {
        alert(ex)
    }
    

}
export const postallingrid=async(val)=>{
    try{
   let data=await axios.post(`${url}myadd`,val)
   return data
    }
    catch(ex)
    {
        alert(ex)
    }
    

}
