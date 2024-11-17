let i = 0;
let colornormal = true;
const slider1 = document.querySelector("#sld1");
const slider2 = document.querySelector("#sld2");
let resultadoSuma = 0

const reactTemas = document.getElementsByClassName('ract-tema');
const reactContainer = document.getElementById('react-xpand1');
const boton = document.getElementById('botonColor');
const resultadoParrafo = document.getElementById('resultado');
const items = document.querySelectorAll('.tachado');

function mostrarClic(){
    i+=1;
    console.log(`clic ${i}`);
}

function mostrarValor(){

    resultadoSuma = parseInt(slider1.value) + parseInt(slider2.value);    
    console.log(resultadoSuma);
}

function mostrarContent(objeto){
    console.log(objeto.target.innerText);
}





function cambiarColor(){
    if(colornormal){
        reactContainer.style.backgroundColor = `#06586C`;
        resultadoParrafo.style.color = `#06586C`;
    }
    else{
        reactContainer.style.backgroundColor = `#e6e6e6`;
        resultadoParrafo.textContent = resultadoSuma;
    }
    colornormal = !colornormal;

}

//aqui arriba puedo porer texto oculto

for (const tema of reactTemas){
    tema.addEventListener('click', mostrarContent)
}

boton.addEventListener('click', cambiarColor)







// tachado

items.forEach(item => {
    item.addEventListener('click', function() {
      
      item.classList.toggle('tachado-activo');
    });
})