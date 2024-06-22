import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [listaContatos, setListaContatos] = useState([]);

  const registrar = (event) => {
    event.preventDefault();
    setListaContatos([
      ...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: numero,
        emailSalvo: email,
      },
    ]);
    setNome("");
    setNumero("");
    setEmail("");
  };

  const deletar = (index) => {
    const newListaContatos = [...listaContatos];
    newListaContatos.splice(index, 1);
    setListaContatos(newListaContatos);
  };

  console.table(listaContatos);
  return (
    <main>
      <form action="" onSubmit={registrar}>
        <div id="fundoInput" className="classic">
          <label htmlFor="nome"> Nome: </label>
          <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <br></br>

          <label htmlFor="telefone"> Telefone:</label>
          <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />

          <br></br>
          
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            name="email-contato"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button>Enviar</button>
        </div>
      </form>

      {listaContatos.map((contato, index) => (
        <div key={index}>
          <p>{contato.nomeSalvo}</p>
          <p>{contato.telefoneSalvo}</p>
          <p>{contato.emailSalvo}</p>
          <button onClick={() => deletar(index)}>Excluir</button>
        </div>
      ))}
    </main>
  );
}