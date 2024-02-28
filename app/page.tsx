export default function Home() {
  return (
    <div className="container">
  
      <h1>Hola Amigo</h1>
      
      <div className="content-form">
        
        <input 
          placeholder="Escribe tu nombre" 
          type="text" 
          required
          autoComplete="nope"
        />
        
        <input 
          placeholder="Escribe tu apellido" 
          type="text" 
          required
          autoComplete="nope"
        />
        
        <input 
          placeholder="Escribe tu correo" 
          type="text" 
          required
          autoComplete="nope"
        />

      </div>
  
    </div>
  );
}