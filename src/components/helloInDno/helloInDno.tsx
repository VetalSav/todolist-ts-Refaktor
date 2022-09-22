// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {
    onClickHandler:(title:string,hellonum:number)=>void
};
export const HelloInDno = (props: Props) => {
    const [bol,setBol]=useState(false)
    const helloDno = "helloDno"
    const hellonum = 2

    const onClickHandler = () => {
     props.onClickHandler(helloDno,hellonum)
        setBol(!bol)
    }
    return (
        <span onClick={onClickHandler}>
            {'Кликни дважды и получишь данные из дна'}
            {bol ? <span>{`${helloDno}--string ${hellonum}---number`}</span>:<span></span>}
        </span>
    );
};