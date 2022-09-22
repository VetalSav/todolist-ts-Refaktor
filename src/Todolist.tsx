import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {EditableSpan} from "./components/Editable_Span/Editable_Span";
import {AddNewItem} from "./components/addNewItem/addNewItem";
import {CrazyTask} from "./components/CrazyTask/CrazyTask";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addItem: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    callbackEditableSpan: (TdID: string, taskID: string, titleInput: string) => void
    callbackTitleTodolist: (TdID: string, titleTodolist: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {


    const removeTodolist = () => props.removeTodolist(props.id)
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const callbackTitleTodolist = (titleTodolist: string) => {
        props.callbackTitleTodolist(props.id, titleTodolist)
    }
    const addItem = (titleTask:string) => {
      props.addItem(titleTask,props.id)
    }
    return <div>
        <h3>
            <EditableSpan title={props.title} callback={callbackTitleTodolist}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <AddNewItem addItem={addItem}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const callbackEditableSpan = (titleInput: string) => {
                        props.callbackEditableSpan(props.id, t.id, titleInput)
                    }

                    return (
                    <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <CrazyTask title={t.title}
                                   isDone={t.isDone}
                                   onChangeHandlerCrazyTask={onChangeHandler}
                                   callbackEditableSpanCrazyTask={callbackEditableSpan}
                                   onClickHandlerCrazyTask={onClickHandler}/>

                    </li>)
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


