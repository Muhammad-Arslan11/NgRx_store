import { createReducer, on } from "@ngrx/store";
import {initialState} from './counter.state';
import { customIncrement, decrement, increment , reset, showCustomToggle} from "./counter.actions";

export const counterReducer = createReducer(
    initialState,
    on(increment, (state)=>{
         return {
            ...state,
            count: state.count + 1
         }
    }),
    on(decrement, (state)=>{
         return {
            ...state,
            count: state.count > 0 ? state.count - 1 : 0
         }
    }),
    on(reset, (state)=>{
         return {
            ...state,
            count: 0
         }
    }),
    on(customIncrement, (state, action)=>{
      console.log(action)
        return {
         ...state,
         count: state.count + Number(action.value)
        }
    }),
    on(showCustomToggle, (state)=>{
      return {
         ...state,
         toggle: !state.toggle
      }
    })
)