// Primera parte
document.querySelector("button").addEventListener("click", saveData);

function saveData() {
  alert('Los datos se han guardado');
};

// Parte segunda
const inputName = document.querySelector(".name");

inputName.addEventListener('focus', ColorSi);
function ColorSi() {
  inputName.style.backgroundColor = '#fff666';
};

inputName.addEventListener('focusout', ColorSiNo);
function ColorSiNo() {
  inputName.style.backgroundColor = '#9999FF';
};

// Parte tercera
const inputRandom = document.querySelector('.random');

inputRandom.addEventListener('keypress', Letra);
function Letra(event){
  const Vocal = event.which;
  if (Vocal === 97 || Vocal === 101 || Vocal === 105 || Vocal === 111 || Vocal === 117) {
    inputRandom.style.color = '#a8323e';
  } else {
    inputRandom.style.color = '#32a836';
  }
};
