// @flow
import * as React from 'react';
import {EditableSpan} from "../Editable_Span/Editable_Span";
import {ChangeEvent} from "react";

type CrazyTaskPropsType = {
    title: string
    isDone: boolean
    onChangeHandlerCrazyTask: (e: ChangeEvent<HTMLInputElement>) => void
    callbackEditableSpanCrazyTask: (titleInput: string) => void
    onClickHandlerCrazyTask: () => void

};
export const CrazyTask = (props: CrazyTaskPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandlerCrazyTask(e)
    }
    const callbackEditableSpan = (titleInput: string) => {
        props.callbackEditableSpanCrazyTask(titleInput)
    }
    const onClickHandler = () => {
        props.onClickHandlerCrazyTask()
    }
    return (
        <>
            <input type="checkbox" onChange={onChangeHandler} checked={props.isDone}/>
            <EditableSpan title={props.title} callback={callbackEditableSpan}/>
            <button onClick={onClickHandler}>delete</button>
        </>
    );
};