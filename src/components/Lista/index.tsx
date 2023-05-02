import style from './Lista.module.scss';
import Item from './Item'
import { Itarefa } from '../../types/tarefa';

export default function Lista({ tarefas }: {tarefas:Itarefa[]}){
    
    const listaTarefas = tarefas.map(tarefa =>
        <Item
            key={tarefa.id}
            {...tarefa}
        />
    );
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>{listaTarefas}</ul>   
        </aside>
    );
}

