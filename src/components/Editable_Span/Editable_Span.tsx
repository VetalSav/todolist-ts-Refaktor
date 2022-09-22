// @flow
import * as React from 'react';
import {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title:string
    callback:(title:string)=>void
};
export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editmod,setEditmod] = useState(false)
    const [tileInput,setTileInput] = useState(props.title)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTileInput(e.currentTarget.value)
    }
    const onDoubleClickSpanHandler = () => {
        setEditmod(!editmod)
    }

    const onBlurHandler = () => {
        setEditmod(!editmod)
        props.callback(tileInput)
    }


    return ( editmod
        ? <input
            type = "text"
            value={tileInput}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            autoFocus/>
             : <span onDoubleClick={onDoubleClickSpanHandler}>{props.title}</span>

    );
};