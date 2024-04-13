document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('active');
  });

function antecessor(){
    let numero1 = parseInt(prompt("Digite um numero para saber seu antecessor: "))
    let ante = numero1 - 1
    alert("O antecessor do seu numero é " + ante)
}

function sucessor(){
    let numero1 = parseInt(prompt("Digite um numero para saber seu sucessor: "))
    let suce = numero1 + 1
    alert("O sucessor do seu numero é " + suce)
}

function areaRetangulo(){
    let base = parseInt(prompt("Digite a base do seu retangulo: "))
    let altura = parseInt(prompt("Agora a altura do seu retangulo: "))

    let area = base * altura
    alert("A area do seu retangulo é: " + area)
}