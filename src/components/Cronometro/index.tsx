import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props{
  selecionado: Itarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
      if(selecionado?.duracao){
        setTempo(tempoParaSegundos(selecionado?.duracao))
      }
  }, [selecionado]);

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o Cronômetro
      </p>
      <div className={style.relogioWrapper}>
        <Relogio tempo = {tempo} />
      </div>
      <Botao 
        onClick = {() => regressiva(tempo)}
      >
        Começar!
      </Botao>
    </div>
  )
}