export default function Header() {
  return (
    <header>
      <div className="container">
        <div id="hocks">
          <img src="Images/hocks.jpeg" alt="Hocks Logo" />
        </div>

        <div id="lista">
          <ul>
            <li>SOBRE</li>
            <li>LOJAS</li>
            <li>EQUIPE</li>
            <li>ENTRAR</li>
          </ul>
          </div>
             <div className="CarrinhoElupa">
          <img id="carrinho" src="Images/carrinhoHocks.jpeg" alt="Ícone de carrinho" />
          <img id="lupa" src="Images/lupa.jpg" alt="Ícone de lupa" />
          </div>
      </div>
    </header>
  );
}
