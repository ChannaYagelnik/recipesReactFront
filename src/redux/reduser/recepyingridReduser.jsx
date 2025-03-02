import {produce} from 'immer'

export const InitalState={
    listingridbycode:[]
}
export const recepyingridReduser=produce((state,action)=>{
    
switch(action.type){
    case 'INGRID_BY_CODE_RECEPY': state.listingridbycode=action.payload
    break;
 }


},InitalState) 