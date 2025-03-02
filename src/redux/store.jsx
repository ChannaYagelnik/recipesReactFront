
import { combineReducers } from 'redux'
import {createStore} from 'redux'
import { recepyingridReduser } from './reduser/recepyingridReduser.jsx'
import{recpiysReducer} from './reduser/recpiysReducer.jsx'
import { UserReducer } from './reduser/UserReducer.jsx'
import {ingridreducer } from './reduser/ingridreducer.jsx'

export const reduser=combineReducers({
    recpiysReducer:recpiysReducer,
    recepyingridReduser:recepyingridReduser,
    UserReducer:UserReducer,
    ingridreducer:ingridreducer
})

export const store=createStore(reduser)
window.store=store