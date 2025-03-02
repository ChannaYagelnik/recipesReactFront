import {produce} from 'immer'

export const InitalState={
    listUseres:[

    ]
}

export const UserReducer=produce((state,action)=>{
switch (action.type){
    case 'ADD_CONECT': state.listUseres=action.payload
    break;
    // case 'GET_CONECT' :state.listUseres=action.payload
    // break;
}
},InitalState)