import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/tarefa';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}>{
    state = {
        id:0,
        nome: "",
        duracao: "00:00",
    }

    adicionarTarefa(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    }
    render(){
        return(
            <form 
                className={style.novaTarefa} 
                onSubmit={this.adicionarTarefa.bind(this)}
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
                        value={this.state.nome}
                        onChange={event => this.setState({ ...this.state, nome: event.target.value })}
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
                        value={this.state.duracao}
                        onChange={event => this.setState({ ...this.state, duracao:event.target.value })}
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        );
    }
}

export default Formulario;

