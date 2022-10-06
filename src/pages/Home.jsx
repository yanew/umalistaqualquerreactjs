import React, { useState, useEffect } from 'react';
import { Item } from '../components/Item';
import '../styles/home.css';

export function Home() {
  
  const[conteudoItem, setConteudoItem] = useState("");
  const[itens, setItens]= useState([]);
  const[idItem, setIdItem] = useState(null);
  const[adicionar, setAdicionar] = useState(true);
  const[idUsuario, setIdUsuario] = useState(null);

  const atualizarUsuario = async () =>{

    const uri = 'http://localhost:8080/usuario/4ea7f047-7f36-40c0-ac50-7f67b872fa09';   
    const res = await fetch(uri);
    const usuario = await res.json();

    const novoItem = {conteudo: conteudoItem}
    const listaAtualizada = {listaItens:[...usuario.listaItens, novoItem]}

    const usuarioTemp = {...usuario, ...listaAtualizada}
    console.log(usuarioTemp);
    await fetch(uri,{
        method: 'PUT',
        body: JSON.stringify(usuarioTemp),
        headers: {'Content-Type': 'application/json'}
    });

    setConteudoItem("");

  }

  const selecionarItem = async (it)=>{

    const uri = 'http://localhost:8080/usuario/4ea7f047-7f36-40c0-ac50-7f67b872fa09';   
    const res = await fetch(uri);
    const usuario = await res.json();

    setConteudoItem(it.conteudo);
    setIdItem(it.id);
    setIdUsuario(usuario.id);
    setAdicionar(false);
  }

  const atualizarItem = async () => {
    const doc = {
        conteudo: conteudoItem,
        idUsuario: idUsuario
    }

    await fetch('http://localhost:8080/item/'+ idItem,{
        method: 'PUT',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });

    setConteudoItem("");
    setAdicionar(true);
}

  useEffect(() => {
    const inicializar = async ()=>{

      const uri = 'http://localhost:8080/usuario/4ea7f047-7f36-40c0-ac50-7f67b872fa09';   
      const res = await fetch(uri);
      const usuario = await res.json();
  
      setItens(usuario.listaItens);
    }

    inicializar();
  }, [itens]);

  return (
    <div id='container' className="container">
       <header>
          <h1>Uma lista qualquer</h1>
        </header>

        <input id="inputItem"
          type="text"
          name="inItem"
          placeholder="Digite o item..."
          value={conteudoItem}
          onChange={(e) => setConteudoItem(e.target.value)}
        />

       {adicionar && <button id="botaoAdicionarItem" type="button" onClick={atualizarUsuario}>
          Adicionar
        </button> 
        }

        {!adicionar && <button id="botaoAtualizarItem" type="button" onClick={atualizarItem}>
          Atualizar
        </button> 
        }

        <div id="cartaoItem" className="cartaoItem">
          {itens.map((item)=>(
            <Item key= {item.id} id = {item.id} conteudo= {item.conteudo} selecionarItem={(it) => selecionarItem(it)}/>
          ))
          }
        </div>

    </div>
  )
}

