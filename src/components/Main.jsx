
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
      <form action=""  onSubmit={registrar}>
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
        <div key={index}>
          <p>{contato.nomeSalvo}</p>
          <p>{contato.telefoneSalvo}</p>
          <p>{contato.emailSalvo}</p>
        <div className="Botao">  <button onClick={() => deletar(index)}>Deletar</button>  </div>
        </div>
      
      )}
      </div>
    </main>
    </div>
  );
}

