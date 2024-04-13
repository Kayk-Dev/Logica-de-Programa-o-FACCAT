document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('active');
  });

function antecessor(){
    let numero1 = parseInt(prompt("Digite um numero para saber seu antecessor: "))
    let ante = numero1 - 1
    alert("O antecessor do seu numero é " + ante) 
}