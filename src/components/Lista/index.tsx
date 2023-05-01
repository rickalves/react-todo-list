import React from 'react';
import style from './Lista.module.scss';

const tarefas = [
    {
        id:1,
        nome: 'React',
        duracao: '02:00:00'
    },
    {
        id:2,
        nome: 'Python',
        duracao: '01:00:00'
    },
    {
        id:3,
        nome: 'JavaScript',
        duracao: '01:00:00'
    },
    {
        id:4,
        nome: 'Google Cloud',
        duracao: '02:00:00'
    },
];

const listaTarefas = tarefas.map(tarefa =>
        <li 
            key={tarefa.id}
            className={style.item}
        >
            <h3>{tarefa.nome}</h3>
            <span>{tarefa.duracao}</span>
        </li>
    );

export default function Lista(){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>{listaTarefas}</ul>   
        </aside>
    );
}

