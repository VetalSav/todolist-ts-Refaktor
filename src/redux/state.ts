import {v1} from "uuid";

import {FilterValuesType} from "../App";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type BaseTodolist ={
    id:string
    filter:FilterValuesType
    title:string
    tasks:Array<TaskType>
}
type TodolistType = {
    1:BaseTodolist
    2:BaseTodolist

}
export type StateType = {
    todolist:TodolistType

}
export const state:StateType = {
    todolist:{
        [1]:{
            id:v1(),
            filter:'all',
            title:'Hello State',
            tasks:[
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true}
            ]
        },
        [2]:{
            id:v1(),
            filter:'all',
            title:'Hello State',
            tasks:[
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true}
            ]
        }
    }
}

