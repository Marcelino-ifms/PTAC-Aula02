
import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("");
  const[telefone, setTelefone] = useState(0);
  const[email, setEmail] = useState("");
  const[listaContatos, setListaContatos] = useState([]);

  const registrar = (event) => {
    event.preventDefault();
    setListaContatos([...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: telefone,
        emailSalvo: email,
      }
    ]);
  };

  const deletar = (index) => {
    const novosContatos = [...listaContatos];
    novosContatos.splice(index, 1);
    setListaContatos(novosContatos);
  };

  console.table(listaContatos);

  return(
    <div className="Registro">
    <main>
      <form action=""  onSubmit={registrar} className="Formulario">
        <label htmlFor="nome"> Nome:  </label>
        <input
          type="text"
          name="" id=""
          value={nome}
          onChange={(event)=> setNome(event.target.value)}
        />
       
        <label htmlFor="telefone"> Telefone:  </label>
        <input
          type="tel"
          name="" id=""
          value={telefone}
          onChange={(event)=> setTelefone(event.target.value)}
        />
        
        <label htmlFor="email"> Email:  </label>
        <input
          type="email"
          name="" id=""
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
        />

        <button>Cadastre-se</button>
      </form>
    <div className="DadosSalvos">
      {listaContatos.map((contato, index) => 
        <div key={index} className="Contato">
          <h2>Contato {index + 1}</h2>
          <p><strong>Nome:</strong> {contato.nomeSalvo}</p> 
          <p><strong>Telefone:</strong> {contato.telefoneSalvo}</p>
          <p><strong>Email:</strong> {contato.emailSalvo}</p>
        <div className="Botao">  <button onClick={() => deletar(index)}>Deletar</button>  </div>
        </div>
      
      )}
      </div>
    </main>
    </div>
  );
}