function compararPersonas(persona1, persona2 = persona) {
    if (persona1 !== persona2) {
      console.log("No son la misma persona!")
    } else {
      console.log("Son la misma persona!")
    }
  }
  
  const persona = { nombre: "Fernando" }
  
  compararPersonas(persona)