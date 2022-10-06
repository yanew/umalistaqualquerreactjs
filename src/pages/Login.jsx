import React, { useState } from 'react';
import '../styles/login.css';

export function Login() {

    const[contLogin, setContLogin] = useState("");
    const[contSenha, setContSenha] = useState("");

    const uri = "http://localhost:8080/usuario";

    const conferirUsuario = async () => {
        const res = await fetch(uri);
        const usuarios = await res.json();

        if(form.login.value===usu.login&&form.senha.value===usu.senha){
            guardarIdUsuarioSessionStorage(usu.id);
            location.href = "http://127.0.0.1:5500/index.html";
        }else{
            alert('tente de novo');
        }
    
        alert('4');
        return valido;
    }
    
    const guardarIdUsuarioSessionStorage = (idUsuario) => {
        sessionStorage.idUsu = idUsuario;
    }
    
    const logar = async () =>{
        alert('logar');
       await conferirUsuario();
    }

    return(
        <div id="panelLogin" className="container">
            <h1 className="h1">Login</h1>
            <input type="text" name="login" id="login" placeholder="Login" className="input" onChange={(e) => setContLogin(e.target.value)}/>
            <input type="password" name="senha" id="senha" placeholder="Senha" className="input" onChange={(e) => setContSenha(e.target.value)}/>
            <button onClick={logar} className="button"> Entrar </button>
        </div>
    
    )

}