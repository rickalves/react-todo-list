import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid'


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Formulario({ setTarefas }: Props) {
    const [nome, setNome] = useState("")
    const [duracao, setDuracao] = useState("00:00")

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    nome,
                    duracao,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setNome("");
        setDuracao("00:00");
    }

    return (
        <form
            className={style.novaTarefa}
            onSubmit={adicionarTarefa}
        >
            <div className={style.inputContainer}>
                <label
                    htmlFor='nome'
                >
                    Adicione um novo estudo
                </label>
                <input
                    type='text'
                    name='nome'
                    id='nome'
                    placeholder='Novo item de estudo...'
                    required
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input
                    type='time'
                    step='1'
                    name='tempo'
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                    value={duracao}
                    onChange={event => setDuracao(event.target.value)}
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    );
}

export default Formulario;