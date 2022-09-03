
// Selectores

const color = document.querySelector('#color')
const maximo = document.querySelector('#maximo')
const minimo = document.querySelector('#minimo')
const puertas = document.querySelector('#puertas')
const transmision   = document.querySelector('#transmision')
const resultado = document.querySelector('#resultado')
const year= document.querySelector('#year')

const max = new Date().getFullYear()
const min = max -10;

const  selectYear =()=>{
    for(let i = max; i>= min; i--){
       opcion = document.createElement('option')
   
       //agregar value
       opcion.value = i;
   
       //agrega innertext
       opcion.innerText= i;
   
       year.appendChild(opcion) 
    }
   }
// se genera objeto de datos busqueda

const datosBuscar = {
    marca: '',
    color:'',
    maximo: '',
    minimo: '',
    puertas: '',
    transmision: '',
    color: '', 
    year: '',
}



const eventListeners=()=>{
    document.addEventListener('DOMContentLoaded',inicioApp(autos))
    document.addEventListener('DOMContentLoaded',selectYear)
}


//agregar marca a datosBusqueda

marca.addEventListener('input' , (e)=>{
    datosBuscar.marca = e.target.value
    filtrarAuto()
   
})
color.addEventListener('input', (e)=>{
    datosBuscar.color = e.target.value
    filtrarAuto()
    
})

maximo.addEventListener('input' , (e)=>{
    datosBuscar.maximo = e.target.value
    filtrarAuto()
})

minimo.addEventListener('input' , (e)=>{
    datosBuscar.minimo = e.target.value
    
})

puertas.addEventListener('input' , (e)=>{
    datosBuscar.puertas = parseInt(e.target.value) 
    filtrarAuto()
})

transmision.addEventListener('input' , (e)=>{
    datosBuscar.transmision = e.target.value
    filtrarAuto()
})

year.addEventListener('input' , (e)=>{
    datosBuscar.year = e.target.value
    filtrarAuto()
})

const eliminarBusqueda=()=>{

    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }

}


//Despliega info de cada auto 
const inicioApp =(autos)=>{
    eliminarBusqueda()
    autos.forEach((auto)=>{

    const carro= document.createElement('p')
    carro.innerHTML =
    `
    ${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} puertas - ${auto.transmision} - Color:${auto.color} - Precio: ${auto.precio}
    `
    resultado.appendChild(carro)
    })
}



const filtrarAuto =()=>{
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    

    if (resultado.length>0){
        inicioApp(resultado)
    }
    else{
        noResultado()
    }
}

const noResultado=()=>{
    eliminarBusqueda()
    const error = document.createElement('p')
    error.innerHTML = 'No se encontraron resultados'
    resultado.appendChild(error)
}

const filtrarMarca=(auto)=>{
    
    if (datosBuscar.marca){
        return auto.marca === datosBuscar.marca;
    }
   return auto
}

const filtrarYear=(auto)=>{
    
    if (datosBuscar.year){
        return auto.year === parseInt(datosBuscar.year) 
    }
   return auto
}

const filtrarMinimo=(auto)=>{
    
    if (datosBuscar.minimo){
        return auto.precio>= datosBuscar.minimo
    }
   return auto
}

const filtrarMaximo=(auto)=>{
    
    if (datosBuscar.maximo){
        return auto.precio<= datosBuscar.maximo
    }
   return auto
}

const filtrarPuertas=(auto)=>{
    
    if (datosBuscar.puertas){
        return auto.puertas === datosBuscar.puertas;
    }
   return auto
}

const filtrarTransmision=(auto)=>{
    
    if (datosBuscar.transmision){
        return auto.transmision === datosBuscar.transmision;
    }
   return auto
}

const filtrarColor=(auto)=>{
    
    if (datosBuscar.color){
        return auto.color === datosBuscar.color;
    }
   return auto
}

eventListeners()