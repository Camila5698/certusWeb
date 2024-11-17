
let colornormal = true;


const reactTemas = document.getElementsByClassName('ract-tema');
const reactContainer = document.getElementById('react-xpand1');
const boton = document.getElementById('botonColor');
const resultadoParrafo = document.getElementById('resultado');
const items = document.querySelectorAll('.tachado');




let slider1 = document.getElementById('sld1');
let slider2 = document.getElementById('sld2');
let slider3 = document.getElementById('sld3');
let slider4 = document.getElementById('sld4');
let slider5 = document.getElementById('sld5');
let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let value4 = document.getElementById('value4');
let value5 = document.getElementById('value5');
let resultado = document.getElementById('fanLevel');


function mostrarValores() {
    value1.textContent = slider1.value;
    value2.textContent = slider2.value;
    value3.textContent = slider3.value;
    value4.textContent = slider4.value;
    value5.textContent = slider5.value;
    
}


function mostrarResultado() {
   
    mostrarValores();

    
    let resultadoSuma = parseInt(slider1.value) + parseInt(slider2.value) + parseInt(slider3.value) + parseInt(slider4.value) + parseInt(slider5.value);

    
    resultado.textContent = resultadoSuma;
    console.log(`Nivel de fanatismo calculado: ${resultadoSuma}`);
}

mostrarValores();


















document.querySelectorAll('.tachado').forEach(item => {
    item.addEventListener('click', function() {
       
        item.classList.toggle('tachado-activo');

       
        if (item.classList.contains('tachado-activo')) {
            
            if (item.id === 'uno') {
                item.classList.add('verde');  
                item.classList.remove('rojo');
            } else if (item.id === 'dos') {
                item.classList.add('rojo');  
                item.classList.remove('verde');
            } else if (item.id === 'cuatro' || item.id === 'cinco') {
                item.classList.add('verde');  
                item.classList.remove('rojo');
            } else {
                item.classList.add('rojo'); 
                item.classList.remove('verde');
            }
        } else {
            
            if (item.id === 'uno') {
                item.classList.add('black');  
                item.classList.remove('verde');
            } else if (item.id === 'dos') {
                item.classList.add('black');  
                item.classList.remove('verde');
            } else if (item.id === 'cuatro' || item.id === 'cinco') {
                item.classList.add('black');  
                item.classList.remove('rojo');
            } else {
                item.classList.add('black');  
                item.classList.remove('verde');
            }
        }
    });
});