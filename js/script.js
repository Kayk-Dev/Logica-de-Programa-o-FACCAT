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

function areaCirculo(){
    let raio = parseInt(prompt("Digite o tamanho do Raio do Circulo: "));
    
    let area = Math.PI * Math.pow(raio, 2);
    alert("A área do circulo é: " + area)
}

function idadeDias(){
    let idade = parseInt(prompt("Digite sua idade: "))

    let dias = 365
    let meses = 12
    let idadeD = dias * idade

    alert("A sua idade em dias é de " + idadeD + " dias")
}

function idadeMeses(){
    let idade = parseInt(prompt("Digite sua idade: "))

    let dias = 365
    let meses = 12
    let idadeM = meses * idade

    alert("A sua idade em meses é de " + idadeM + " meses")
}

function eleitores(){
    let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
    let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
    let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

    let totalEleitores = votosBrancos + votosNulos + votosValidos;
    let percentualBrancos = (votosBrancos / totalEleitores) * 100;
    let percentualNulos = (votosNulos / totalEleitores) * 100;
    let percentualValidos = (votosValidos / totalEleitores) * 100;

    let resultado = "Total de eleitores: " + totalEleitores + "\n" +
                    "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%\n" +
                    "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%\n" +
                    "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%";

    alert(resultado);
}

function calculoSalario(){
    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual (em R$):"));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (em %):"));

    let novoSalario = salarioAtual * (1 + percentualReajuste / 100);
    alert("O novo salário é: R$" + novoSalario.toFixed(2));
}

function calcularCustoFinal() {

    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro (em R$):"));

    let porcentagemDistribuidor = 28;
    let porcentagemImpostos = 45;

    let custoDistribuidor = custoFabrica * (porcentagemDistribuidor / 100);
    let custoImpostos = custoFabrica * (porcentagemImpostos / 100);
    let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
    
    alert("O custo final ao consumidor é: R$" + custoFinal.toFixed(2));
}

function calcularSalarioFinal() {
    // Solicitar ao usuário que insira os dados do vendedor
    let numCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos pelo vendedor:"));
    let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas pelo vendedor (em R$):"));
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor (em R$):"));
    let valorPorCarro = parseFloat(prompt("Digite o valor que o vendedor recebe por carro vendido (em R$):"));

    let comissaoPorCarro = numCarrosVendidos * valorPorCarro;
    
    let comissaoTotal = valorTotalVendas * 0.05;
    
    let salarioFinal = salarioFixo + comissaoPorCarro + comissaoTotal;

    alert("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));
}

function converterFahrenheitParaCelsius() {
    
    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));

    let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

    alert("A temperatura em graus Celsius é: " + temperaturaCelsius.toFixed(2) + "°C");
}

function calcularMediaFinal() {
    let nota1 = parseFloat(prompt("Digite a nota 1:"));
    let nota2 = parseFloat(prompt("Digite a nota 2:"));
    let nota3 = parseFloat(prompt("Digite a nota 3:"));

    let pesoNota1 = 2;
    let pesoNota2 = 3;
    let pesoNota3 = 5;

    let mediaFinal = ((nota1 * pesoNota1) + (nota2 * pesoNota2) + (nota3 * pesoNota3)) / (pesoNota1 + pesoNota2 + pesoNota3);
    
    alert("A média final do aluno é: " + mediaFinal.toFixed(2));
}

function verificarMaiorQueDez() {
    let valor = parseFloat(prompt("Digite um valor:"));

    if (valor > 10) {
        alert("É MAIOR QUE 10!");
    } else {
        alert("NÃO É MAIOR QUE 10!");
    }
}

function verificarPositivoNegativo() {
    let valor = parseFloat(prompt("Digite um valor:"));

    if (valor >= 0) {
        alert("O valor é positivo.");
    } else {
        alert("O valor é negativo.");
    }
}

function calcularCustoMaca() {
    let numMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

    let custoUnitario;

    if (numMacas < 12) {
        custoUnitario = 1.30;
    } else {
        custoUnitario = 1.00;
    }

    let custoTotal = numMacas * custoUnitario;

    alert("O custo total da compra é R$" + custoTotal.toFixed(2));
}

function verificarAprovacao() {
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));

    let media = (nota1 + nota2) / 2;

    let mensagem;
    if (media >= 6) {
        mensagem = "Parabéns! Você foi aprovado.";
    } else {
        mensagem = "Infelizmente você não foi aprovado.";
    }

    alert("Média: " + media.toFixed(2) + "\n" + mensagem);
}

function verificarVotacao() {
    let anoAtual = new Date().getFullYear();
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

    let idade = anoAtual - anoNascimento;

    let mensagem;
    if (idade >= 18) {
        mensagem = "Você é obrigado a votar este ano.";
    } else if (idade >= 16) {
        mensagem = "Você pode votar opcionalmente este ano.";
    } else {
        mensagem = "Você não pode votar este ano.";
    }

    alert(mensagem);
}

function encontrarMaior() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let maior;

    if (valor1 > valor2) {
        maior = valor1;
    } else {
        maior = valor2;
    }

    alert("O maior valor é: " + maior);
}

function escreverEmOrdemCrescente() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));

    let menor;
    let maior;

    if (valor1 < valor2) {
        menor = valor1;
        maior = valor2;
    } else {
        menor = valor2;
        maior = valor1;
    }

    alert("Os valores em ordem crescente são: " + menor + " e " + maior);
}

function calcularDuracaoJogo() {
    let horaInicio = parseInt(prompt("Digite a hora de início do jogo (horas inteiras):"));
    let horaFim = parseInt(prompt("Digite a hora de fim do jogo (horas inteiras):"));

    let duracao;

    if (horaFim >= horaInicio) {
        duracao = horaFim - horaInicio;
    } else {
        duracao = 24 - horaInicio + horaFim;
    }

    alert("A duração do jogo é de " + duracao + " horas.");
}

function calcularSalarioTotal() {
    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
    let salarioHora = parseFloat(prompt("Digite o salário por hora:"));

    const horasSemanais = 40;
    const semanasNoMes = 4;
    const percentualHoraExtra = 0.5;

    let salarioTotal;

    if (horasTrabalhadas <= horasSemanais * semanasNoMes) {
        salarioTotal = horasTrabalhadas * salarioHora;
    } else {
        let horasExtras = horasTrabalhadas - horasSemanais * semanasNoMes;
        let salarioHoraExtra = salarioHora * (1 + percentualHoraExtra);
        salarioTotal = (horasSemanais * semanasNoMes * salarioHora) + (horasExtras * salarioHoraExtra);
    }

    alert("O salário total do funcionário é: R$" + salarioTotal.toFixed(2));
}

function calcularSalarioComissao() {
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    let valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas pelo vendedor:"));

    const limiteComissao1 = 1500;
    const taxaComissao1 = 0.03;
    const taxaComissao2 = 0.05;

    let comissao;

    if (valorVendas <= limiteComissao1) {
        comissao = valorVendas * taxaComissao1;
    } else {
        comissao = (limiteComissao1 * taxaComissao1) + ((valorVendas - limiteComissao1) * taxaComissao2);
    }

    let salarioTotal = salarioFixo + comissao;

    alert("O salário total do vendedor é: R$" + salarioTotal.toFixed(2));
}

function calcularSaldoAtual() {
    let numeroConta = prompt("Digite o número da conta do cliente:");
    let saldo = parseFloat(prompt("Digite o saldo do cliente:"));
    let debito = parseFloat(prompt("Digite o débito do cliente:"));
    let credito = parseFloat(prompt("Digite o crédito do cliente:"));

    let saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        alert("Saldo Positivo");
    } else {
        alert("Saldo Negativo");
    }
}

function verificarCompraEstoque() {
    let quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque:"));
    let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"));
    let quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"));

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

    if (quantidadeAtual >= quantidadeMedia) {
        alert("Não efetuar compra");
    } else {
        alert("Efetuar compra");
    }
}
