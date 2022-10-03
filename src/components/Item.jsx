import edit from '../images/edit.png';
import lixeira from '../images/lixeira.png';

import '../styles/item.css';

export function Item(item) {

    //onClick={removerItem()}
    const removerItem = (event) => {

    }

    //onClick={selecionarItemParaEdicao(window.event)}
    const selecionarItemParaEdicao = (event) => {

    }

    return(
        <div class="item">
            <div class="painelTextoItem">
                <span class="textoItem">{item.conteudo}</span>
            </div>
            <div class="painelBotoes">
                <a class="link" >
                    <img src={edit} width="20" height="20"/>
                </a>
                <a class="link" >
                    <img src={lixeira} width="20" height="20"/>
                </a>
            </div>
        </div>
    );
}