import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[telefone, setTelefone] = useState(0)
  const[email, setEmail] = useState("")
  const[listaContatos, setListaContatos] = useState([]) //lista usamos cochetes[]


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
    
  }

  console.table(listaContatos)
    return(
      <main>

                <form action=""  onSubmit={registrar}>
                <label htmlFor="nome"> Nome:  </label>
                <input
                type="text"
                name="" id=""
                value={nome}
                onChange={(event)=> setNome(event.target.value)}
                />

                <button>Cadastre-se</button>
          
          

         <br/>
         <br/>
    

         <label htmlFor="telefone"> Telefone:  </label>

<label htmlFor="telefone"> Telefone:  </label>

         <input
         type="tel"
         name="" id=""
         value={telefone}
         onChange={(event)=> setTelefone(event.target.value)}
         />

          <button>Cadastre-se</button>
      
         
           <br/>
           <br/>


                <label htmlFor="email"> Email:  </label>
                <input
                type="email"
                name="" id=""
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
                />
                
                  <button>Cadastre-se</button>
         

         </form>

         {listaContatos.map((contato, index)=> 
         <div key={index}>
               <p>{contato.nomeSalvo}</p>
               <p>{contato.telefoneSalvo}</p>
               <p>{contato.emailSalvo}</p>
               <button onClick={deletar}>Deletar</button>
         </div>
         )}
      </main>
    );
}