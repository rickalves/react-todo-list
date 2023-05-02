import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { Itarefa } from '../types/tarefa';
function App() {
//   const items = [
//     {
//         id:1,
//         nome: 'React',
//         duracao: '02:00:00'
//     },
//     {
//         id:2,
//         nome: 'Python',
//         duracao: '01:00:00'
//     },
//     {
//         id:3,
//         nome: 'JavaScript',
//         duracao: '01:00:00'
//     },
//     {
//         id:4,
//         nome: 'Google Cloud',
//         duracao: '02:00:00'
//     },
// ];

const [tarefas, setTarefas] = useState<Itarefa[]>([])
 
return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/>
        <Cronometro />
    </div>
  );
}

export default App;
