import React from 'react'
import style from './Botao.module.scss'
interface BtnProps {
    type?: "button" | "submit" | "reset" | undefined,
    children:string,
    onClick?: () => void
}

class Botao extends React.Component<BtnProps>{
    render(){
        const {type = "button", children, onClick} = this.props
        return (
            <button 
                type={type} 
                className={style.botao}
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
}

export default Botao;