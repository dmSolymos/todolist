import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../../../data";


const initialState = {
    tasklistItems:taskList,
    editValue:{}
}



const tasklistSlice = createSlice({
    name: 'tasklist',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.tasklistItems = state.tasklistItems.concat(action.payload)
        },
        changeTask:(state,action)=>{
            const index = state.tasklistItems.find(item => item.id === action.payload.id)
            index.title=action.payload.title;
            index.priority =action.payload.priority;
            editValue:{};
        },
        editTask:(state,{payload})=>{
           state.editValue = state.tasklistItems.find(
             (target) => target.id === payload.id,
           );
           
        },
        removeTask:(state,action)=>{
            const itemId= action.payload;
            const some = state.tasklistItems.filter((item)=> item.id !==itemId)
            state.tasklistItems = some;
            
        },
        updateProgress:(state,{payload})=>{
           const item = state.tasklistItems.find((some)=>some.id === payload.id);
           if(item.progress==0){
            item.progress = item.progress+50;
            item.status = 'In progress'
           } else if (item.progress ==50){
            item.progress = item.progress +50;
            item.status = 'Done'
           } else if (item.progress ==100){
            item.progress = item.progress -100;
            item.status = 'To Do'
           }

        },

    }
})

export default tasklistSlice.reducer;
export const {removeTask, addTask,updateProgress,editTask,changeTask} = tasklistSlice.actions;