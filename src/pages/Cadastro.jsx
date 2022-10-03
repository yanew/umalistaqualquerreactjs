



export function Cadastro() {


    return(
    <form id="formCadastro" class="container">
        <div id="cadastro">
            <h1 class="h1">Cadastre-se</h1>
            <input type="text" name="login" id="login" placeholder="Login" class="input"/>
            <input type="password" name="senha" id="senha" placeholder="Senha" class="input"/>
            <input type="nome" name="nome" id="nome" placeholder="Nome" class="input"/>
            <input type="submit" value="Cadastrar" onClick={cadastrar} class="button"/>
        </div>
    </form>
    )

}