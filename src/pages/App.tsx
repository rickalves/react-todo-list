import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { Itarefa } from '../types/tarefa';
function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
