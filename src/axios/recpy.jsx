import axios from "axios"

let url="https://localhost:7245/api/recepiy/"
//קבלת כל המתכונים
export const getAll= async()=>{
    
try{
let data=await axios.get(`${url}getall`)
return data
}
catch(err){
console.log(err)
}
}
//הוספת מתכון השתמשתי בקומפוננטהADDRECEPY
export const addRecepiy= async(val)=>{
    debugger
try{
    let data=await axios.post(`${url}myadd`,val)
return data
}
catch(err){
    console.log(err)
    }

}

