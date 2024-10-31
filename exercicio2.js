document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    let altura = document.getElementById('altura').value / 100;
    let peso = document.getElementById('peso').value;

    if (altura > 0 && peso > 0) {
        // Calculando o IMC
        let imc = peso / (altura * altura);
        imc = imc.toFixed(2);

        // Definindo a mensagem de acordo com o valor do IMC
        let mensagem;
        if (imc < 18.5) {
            mensagem = `Seu IMC é ${imc}. Você está abaixo do peso ideal.`;
        } else if (imc >= 18.5 && imc < 24.9) {
            mensagem = `Seu IMC é ${imc}. Parabéns! Você está com o peso ideal.`;
        } else if (imc >= 25 && imc < 29.9) {
            mensagem = `Seu IMC é ${imc}. Atenção! Você está com sobrepeso.`;
        } else {
            mensagem = `Seu IMC é ${imc}. Cuidado! Você está com obesidade.`;
        }

        // Exibindo o resultado
        document.getElementById('resultado').textContent = mensagem;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos!';
    }
});