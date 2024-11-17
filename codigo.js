let i = 0;
const slider1 = document.querySelector("#sld1");
const slider2 = document.querySelector("#sld2");

const reactTemas = document.getElementsByClassName('ract-tema');

function mostrarClic(){
    i+=1;
    console.log(`clic ${i}`);
}

function mostrarValor(){
    
    console.log(parseInt(slider1.value) + parseInt(slider2.value))
}

function mostrarContent(objeto){
    console.log(objeto.target.innerText);
}

for (const tema of reactTemas){
    tema.addEventListener('click', mostrarContent)
}
