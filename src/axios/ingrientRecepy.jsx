import axios from "axios"

let url="https://localhost:7245/api/recepingridentc/"
export const getspecipisingrud=async(val)=>{
    try{
   let data=await axios.get(`${url}idRecipy_by_Get/${val}`)
   return data
    }
    catch(ex)
    {
        alert(ex)
    }
    

}

// https://localhost:7245/api/recepingridentc/idRecipy_by_Get/222
// export const addpost2=async(val)=>{
//     try{
// let data=await axios.post(`${url}AddAllIngridiens/${val}`)
//     }
//     catch(ex){
// alert(ex)
//     }

// }
// https://localhost:7245/api/recepingridentc/addRechivim/67
export const addRechivim=async(val,arringrid)=>{
    try{
   let data=await axios.post(`${url}addRechivim/${val}`,arringrid)
   return data
    }
    catch(ex)
    {
        alert(ex)
    }
    

}