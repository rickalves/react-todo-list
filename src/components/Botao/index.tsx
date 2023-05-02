import React from 'react'
import style from './Botao.module.scss'
interface BtnProps {
    type?: "button" | "submit" | "reset" | undefined,
    children:string
}

class Botao extends React.Component<BtnProps>{
    render(){
        const {type = "button"} = this.props
        return (
            <button 
                type={type} 
                className={style.botao}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Botao;