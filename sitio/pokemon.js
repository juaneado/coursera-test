const reiniciar = document.getElementById('reiniciar')
const seleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const contenedorTarjetas =document.getElementById('contenedorTarjetas')

const seleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanEmpates = document.getElementById('empates')
const combates = document.getElementById('combates')        
const seccionMensajes = document.getElementById('resultado')        
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const combateFinalizado = document.getElementById('combateFinalizado')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let pokemones = [] //es un arreglo

let opcionDePokemones

let mascotaJugador
let inputScuartle 
let inputSandlash 
let inputCharizar
let inputMankey
let inputPidgey
let inputPicachu
let inputBeedrill
let inputVictreebel

let ataquesPokemon
let ataquePokemonEnemigo

let ataqueJugador = []
let ataqueEnemigo = [] 

let botonFuego 
let botonAgua 
let botonTierra
let botonAire
let botonKarate

let botones = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0 
let victoriasEnemigo = 0

let empates = 0

let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo



//crear clases //todas las clases inician con mayuscualas
class Pokemon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
}
//objetos
let Scuartle   = new Pokemon('Scuartle','./img/Scuartle.png',5)
let Sandlash   = new Pokemon('Sandlash','./img/Sandslash.png',5)
let Charizar   = new Pokemon('Charizar','./img/Charizard.png',5)
let Mankey     = new Pokemon('Mankey','./img/Mankey.png',5)
let Pidgey     = new Pokemon('Pidgey','./img/Pidgey.png',5)
let Picachu    = new Pokemon('Picachu','./img/Picachu.png',5)
let Beedrill   = new Pokemon('Beedrill','./img/Beedrill.png',5)
let Victreebel = new Pokemon('Victreebel','./img/Victreebel.png',5)

Scuartle.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Sandlash.ataques.push(
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Charizar.ataques.push(
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌱',id:'boton-tierra'},
    {nombre:'🌪️',id:'boton-aire'} 
)
Mankey.ataques.push(
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Pidgey.ataques.push(
    {nombre:'🌪️',id:'boton-aire'},
    {nombre:'🌪️',id:'boton-aire'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Picachu.ataques.push(
    {nombre:'🌪️',id:'boton-aire'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Beedrill.ataques.push(
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌪️',id:'boton-aire'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'🌱',id:'boton-tierra'}
)
Victreebel.ataques.push(
    {nombre:'🥊',id:'boton-karate'},
    {nombre:'🔥',id:'boton-fuego'},
    {nombre:'💧',id:'boton-agua'},
    {nombre:'🌪️',id:'boton-aire'},    
    {nombre:'🌱',id:'boton-tierra'}
)
pokemones.push(Scuartle,Sandlash,Charizar,Mankey,Pidgey,Picachu,Beedrill,Victreebel)

//empuja valores a la variable
//pokemones.push(Scuartle,Sandlash,Charizar)


//console.log(pokemones)




function iniciarJuego(){    
        reiniciar.style.display ='none'  
        sectionVerMapa.style.display ='none'

        pokemones.forEach((Pokemon) =>{
            //console.log(Pokemon.nombre)
          opcionDePokemones = `
          <input type="radio" name="mascota" id=${Pokemon.nombre}>
            <label class="tarjeta-pokemon" for=${Pokemon.nombre}>
                <p>${Pokemon.nombre}</p>
                <img src=${Pokemon.foto} alt=${Pokemon.nombre}>
            </label>
          `
          
          contenedorTarjetas.innerHTML += opcionDePokemones
            inputScuartle = document.getElementById('Scuartle')
            inputSandlash = document.getElementById('Sandlash')
            inputCharizar = document.getElementById('Charizar')
            inputMankey   = document.getElementById('Mankey')
            inputPidgey   = document.getElementById('Pidgey')
            inputPicachu = document.getElementById('Picachu')
            inputBeedrill = document.getElementById('Beedrill')
            inputVictreebel = document.getElementById('Victreebel')
        })

        seleccionarAtaque.style.display ='none'    
        botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)    
    
        botonReiniciar.addEventListener('click', reiniciarJuego) 
  
}
function seleccionarMascotaJugador() {
        seleccionarMascota.style.display ='none'       
        //seleccionarAtaque.style.display ='flex'
        sectionVerMapa.style.display ='flex'        
        intervalo = setInterval(pintarPersonaje,50)

    if (inputScuartle.checked) {
        spanMascotaJugador.innerHTML= inputScuartle.id   
        mascotaJugador = inputScuartle.id      
    }else if (inputSandlash.checked) {
        spanMascotaJugador.innerHTML= inputSandlash.id 
        mascotaJugador = inputSandlash.id      
    }else if (inputCharizar.checked) {
        spanMascotaJugador.innerHTML = inputCharizar.id 
        mascotaJugador = inputCharizar.id    
    }else if (inputMankey.checked) {
        spanMascotaJugador.innerHTML = inputMankey.id
        mascotaJugador= inputMankey.id
    }else if (inputPidgey.checked) {
        spanMascotaJugador.innerHTML = inputPidgey.id
        mascotaJugador = inputPidgey.id
    }else if (inputPicachu.checked) {
        spanMascotaJugador.innerHTML = inputPicachu.id
        mascotaJugador = inputPicachu.id
    }else if (inputBeedrill.checked) {
        spanMascotaJugador.innerHTML = inputBeedrill.id
        mascotaJugador = inputBeedrill.id
    }else if (inputVictreebel.checked) {
        spanMascotaJugador.innerHTML = inputVictreebel.id
        mascotaJugador = inputVictreebel.id
    }
    else{
        alert('POR FAVOR, SELECCIONA UNA MASCOTA ')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
    
}
function seleccionAleatoria(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}; //formula para número aleatorio

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre) {
           ataques = pokemones[i].ataques 
        }
        
    }
    mostrarAtaques(ataques)
    
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button id=${ataque.id} class="boton-de-ataques BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    })
     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botonAire = document.getElementById('boton-aire')
     botonKarate = document.getElementById('boton-karate')

     botones = document.querySelectorAll('.BAtaque')
    
}
function secuenciaAtaque() {
botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        if (e.target.textContent ==='🔥') {
            ataqueJugador.push('Fuego')
            console.log(ataqueJugador)
            boton.style.background = '#112f58' 
            boton.disabled = true  // deshabilitar botones         
        } else if (e.target.textContent ==='💧') {
            ataqueJugador.push('Agua')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
        }else if (e.target.textContent ==='🥊') {
            ataqueJugador.push('Karate')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true
        }else if (e.target.textContent ==='🌪️') {
            ataqueJugador.push('Aire')
            console.log(ataqueJugador)
            boton.style.background = '#112f58'
            boton.disabled = true  
        }else{
            ataqueJugador.push('Tierra')
            console.log(ataqueJugador)
            boton.style.background = '#112f58' 
            boton.disabled = true            
        }
        ataqueAleatorioEnemigo()
    })    
})    
}
function seleccionarMascotaEnemigo() {
    let pokemonEnemigo = seleccionAleatoria(0,pokemones.length -1)    

    spanMascotaEnemigo.innerHTML = pokemones[pokemonEnemigo].nombre
    ataquePokemonEnemigo = pokemones[pokemonEnemigo].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = seleccionAleatoria(0,ataquePokemonEnemigo.length -1)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo.push('Fuego')
        
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo.push('Agua')
        
    }else if (ataqueAleatorio == 3) {
        ataqueEnemigo.push('Karate')

    }else if (ataqueAleatorio == 4) {
        ataqueEnemigo.push('Aire')
    }else{
        ataqueEnemigo.push('Tierra')
        
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate() 
    }
}
function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index,index)
            crearMensaje('EMPATE')
            empates++
            spanEmpates.innerHTML=empates
        }else if(ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'Tierra'){
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] === 'Agua' && ataqueEnemigo[index] ==='Fuego') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
           spanVidasJugador.innerHTML = victoriasJugador            
        }else if (ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Agua') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'Karate') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Aire' && ataqueEnemigo[index] === 'Fuego') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Aire' && ataqueEnemigo[index] === 'Tierra') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Agua' && ataqueEnemigo[index] === 'Aire') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Karate' && ataqueEnemigo[index] === 'Agua') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else if (ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Karate') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }
        else if (ataqueJugador[index] === 'Karate' && ataqueEnemigo[index] === 'Aire') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else{
            indexAmbosOponentes(index,index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }    

    revisarVidas()

}
function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        resultadoEmpate()
        
    }else if(victoriasJugador > victoriasEnemigo){
        resultadoGanar()
    }else{
        resultadoPerder()
    }
    
}
function crearMensaje(resultado) {  
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}


function deshabilitrarBotones() {
    botones.forEach((boton) => {
         
        boton.style.display= 'none'

    })  

    seleccionarAtaque.style.display ='flex'
    reiniciar.style.display ='flex'
}
function resultadoEmpate() {
    let empate = document.createElement('h1')
        empate.style.display ='flex'
        empate.innerHTML = 'ESTO ES UN EMPATE!!!!'
        combateFinalizado.appendChild(empate)
        deshabilitrarBotones()
}
function resultadoGanar() {
    let ganaste = document.createElement('h1')
        ganaste.style.display ='flex'
        ganaste.innerHTML = 'FELICIDADES GANASTE!!!!'
        combateFinalizado.appendChild(ganaste)
        deshabilitrarBotones()    
}
function resultadoPerder(){
    let perdiste = document.createElement('h1')
        perdiste.style.display ='flex'
        perdiste.innerHTML = 'P E R D I S T E ! ! !'
        combateFinalizado.appendChild(perdiste)
        deshabilitrarBotones()
}

function reiniciarJuego() {
    location.reload()
}

function pintarPersonaje(){
    pokemones.forEach((Pokemon) => {
        if (mascotaJugador == Pokemon.nombre) {
            Pokemon.x= Pokemon.x + Pokemon.velocidadX
            Pokemon.y = Pokemon.y + Pokemon.velocidadY
            lienzo.clearRect(0,0 , mapa.Width, mapa.height)
            //lienzo.beginPath()
            lienzo.drawImage(
                Pokemon.mapaFoto,
                Pokemon.x,
                Pokemon.y,
                Pokemon.ancho,
                Pokemon.alto )    
        }})
} 
    
function moverDerecha() {
    pokemones.forEach((Pokemon) => {
        if (mascotaJugador == Pokemon.nombre) {
            Pokemon.velocidadX = 5
 
        }}) 
    
    
}
function moverIzquierda(){
    pokemones.forEach((Pokemon) => {
        if (mascotaJugador == Pokemon.nombre) {
            Pokemon.velocidadX = -5

        }})  
}

function moverAbajo(){
    pokemones.forEach((Pokemon) => {
        if (mascotaJugador == Pokemon.nombre) {
            Pokemon.velocidadY = 5

        }})  
}
function moverArriba(){
    pokemones.forEach((Pokemon) => {
        if (mascotaJugador == Pokemon.nombre) {
            Pokemon.velocidadY = -5

        }}) 
}
function detenerMovimiento() {
    pokemones.velocidadX = 0
    pokemones.velocidadY = 0
}
/*<p>Tu mascota atacó con <span id="tu-ataque"></span>, la mascota del enemigo atacó con <span id="ataque-enemigo"></span> - GANASTE </p>*/
window.addEventListener('load', iniciarJuego)
