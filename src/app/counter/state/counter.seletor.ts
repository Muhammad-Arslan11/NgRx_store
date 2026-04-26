import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Count } from "./counter.state";

export const getCounterState = createFeatureSelector<Count>('counter');

export const getCount = createSelector(getCounterState, (state)=>{
    return state.count;
})
export const getToggle = createSelector(getCounterState, (state)=>{
    return state.toggle;
})