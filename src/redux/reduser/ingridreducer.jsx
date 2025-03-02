import {produce} from 'immer'

export const InitalState={
    listingri:[]
}
export const ingridreducer=produce((state,action)=>{
    
switch(action.type){
    case 'INGRID': state.listingri=action.payload
    break;
 }


},InitalState) 