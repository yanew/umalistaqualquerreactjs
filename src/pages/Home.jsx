import React, { useState } from 'react'
import { Item } from '../components/Item';
import '../styles/home.css';

export function Home() {
  
  const[conteudoItem, setConteudoItem] = useState("");
  const[itens, setItens]= useState([]);
  
  const adicionarItem = ()=>{

    const novoItem = {
      conteudo: conteudoItem
    }

    setItens(anteriorItens => [...anteriorItens, novoItem]);
  }

  return (
    <div id='container' className="container">
       <header>
          <h1>Uma lista qualquer</h1>
        </header>

        <input id="inputItem"
          type="text"
          name="inItem"
          placeholder="Digite o item..."
          onChange={(e) => setConteudoItem(e.target.value)}
        />

        <button id="botaoAdicionar" type="button" onClick={adicionarItem}>
          Adicionar
        </button>

        {itens.map((item)=>(
          <Item key= {item.id} conteudo= {item.conteudo}/>
        ))
        }

    </div>
  )
}

