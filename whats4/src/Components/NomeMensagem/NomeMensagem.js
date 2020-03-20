import React from 'react'
import { render } from '@testing-library/react';
import './NomeMensagem.css';


class NomeMensagem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            mensagemUsuario: [
                
                    
                
            ],
            
            valorInputUsuario: "",
            valorInputMensagem: ""

        };
    }

    adicionaUsuario = (event) => {
        
        event.preventDefault()

        const novoUsuario = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };

        const novosUsuarios = [...this.state.mensagemUsuario, novoUsuario]

        this.setState({ mensagemUsuario: novosUsuarios,
        valorInputUsuario:"" ,
        valorInputMensagem:""
        
        });

    }

    onChangeInputNomeUsuario = event =>{
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagemUsuario = event => {
        this.setState({ valorInputMensagem: event.target.value })
    }

   render() {
       
    const containerDeMensagens = this.state.mensagemUsuario.map(elemento => {
        return(
            
            <p>
            
                <b>{elemento.usuario+":"}</b>  {elemento.mensagem}
            
            </p>
            
               
        )
    });


    
    
    return(
        <div>

        <div className="divmensagem">{containerDeMensagens}</div>
        <form>    
            
            <input className="inputUsuario" 
                type="text"
                placeholder={"Usuário"}
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputNomeUsuario}
            />

            <input className="inputMensagem"
                type="text"
                placeholder={"Mensagem"}
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagemUsuario}

            />

            <button onClick={this.adicionaUsuario}>Enviar</button>

        </form>    
            
            
        
        </div>    
       )
   } 

}

export default NomeMensagem;
