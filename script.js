function calcularIMC(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso <= 0 || altura <= 0) {
        alert("Insira valores maiores que zero para peso e altura.");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let mensagem = "";
    if (imc < 18.5) {
        mensagem = "Abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso normal.";
    } else {
        mensagem = "Acima do peso.";
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc}. ${mensagem}`;
}
