console.log("The house always wins!");

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
console.log(idInput);
console.log(colorInput);

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}


function resetCard(){
   const reset = document.getElementById('idInput').value = "";
   const reset2 = document.getElementById('colorInput').value = "";
}