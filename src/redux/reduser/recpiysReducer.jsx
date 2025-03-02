import {produce} from 'immer'

export const InitalState={
    listRecpiy:[]
}
export const recpiysReducer=produce((state,action)=>{
    
switch(action.type){
    case 'GET_RECEPY': state.listRecpiy=action.payload
    break;
 }


},InitalState) 