import React, { useState } from 'react';
import '../styles/login.css';

export function Login() {

    const[contLogin, setContLogin] = useState("");
    const[contSenha, setContSenha] = useState("");

    const uri = "http://localhost:8080/usuario/";

    const conferirUsuario = async () => {
        const res = await fetch(uri+contLogin+"/"+contSenha);
        alert(res);
        const usuario = await res.json();
        console.log(usuario);
        guardarIdUsuarioSessionStorage(usuario.id);
    }
    
    const guardarIdUsuarioSessionStorage = (idUsuario) => {
        sessionStorage.idUsu = idUsuario;
    }
    
    const logar = async () =>{
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