const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  contarOvejas = (ovejas) =>{
    // aquí tu magia
    const ov = ovejas.filter(o => {
        if((o.name).toUpperCase().includes('N') && (o.name).toUpperCase().includes('A')  && o.color==='rojo'){
            return o
        }
        
    })
    return ov
  }
  
  const ovejasFiltradas = contarOvejas(ovejas)
  
  console.log(ovejasFiltradas)