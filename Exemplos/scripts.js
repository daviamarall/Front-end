// Função para mostrar uma mensagem ao clicar em um botão
function showMessage() {
    alert("Você clicou no botão!");
}

// Função para exibir a hora atual
function showTime() {
    var date = new Date(); // Obter a data atual
    var hours = date.getHours(); // Obter as horas
    var minutes = date.getMinutes(); // Obter os minutos
    var seconds = date.getSeconds(); // Obter os segundos
    var timeString = hours + ":" + minutes + ":" + seconds; // Formatar a hora como uma string

    // Exibir a hora em um elemento com o id "clock"
    document.getElementById("clock").innerHTML = timeString;
}

// Função para atualizar a hora a cada segundo
setInterval(showTime, 1000);
