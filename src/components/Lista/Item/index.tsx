import React from 'react'
import style from '../Lista.module.scss';
import { Itarefa } from '../../../types/tarefa';

export default function Item(props:Itarefa){
    return(
        <li 
            className={style.item}
        >
            <h3>{props.nome}</h3>
            <span>{props.duracao}</span>
        </li>
    );
}