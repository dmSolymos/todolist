import { configureStore } from "@reduxjs/toolkit";
import tasklistReducer from './features/tasklist/tasklistSlice';
import modalSlice from "./features/modalSlice/modalSlice";
import modalEditSlice from "./features/modalSlice/modalEditSlice";
export const store= configureStore({
    reducer:{
        tasklist: tasklistReducer,
        modal:modalSlice,
        modalEdit:modalEditSlice,
    }
});