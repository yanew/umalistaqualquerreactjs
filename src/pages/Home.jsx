import { useState } from 'react'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div id='container' className="container">
       <header>
          <h1>Uma lista qualquer</h1>
        </header>
        <input id="inputItem"
          type="text"
          name="inItem"
          placeholder="Digite o item..."
        />
        <button id="botaoAdicionar" type="button" onClick={adicionarItem}>
          Adicionar
        </button>

        <div id="cartaoItem" class="cartaoItem"/>
    </div>
  )
}

