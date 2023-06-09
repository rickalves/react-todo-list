import React from 'react'
import style from './Item.module.scss';
import { Itarefa } from '../../../types/tarefa';

interface Props extends Itarefa{
    selecionaTarefa:(tarefaSelecionada:Itarefa) => void
}
export default function Item({selecionaTarefa, ...tarefa }:Props){
    return(
        <li 
            className={`
                ${style.item} 
                ${tarefa.selecionado ? style.itemSelecionado : ""}
                ${tarefa.completado ? style.itemCompletado : ""}
            `}
            onClick={() => !tarefa.completado && selecionaTarefa(tarefa)}
        >
            <h3>{tarefa.nome}</h3>
            <span>{tarefa.duracao}</span>
            {tarefa.completado && 
            <span 
                className={style.concluido}
                aria-label='tarefa completada'
            ></span>}
        </li>
    );
}