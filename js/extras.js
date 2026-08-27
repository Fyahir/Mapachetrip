//<!-- Bautista Olivares Francisco Yahir -->
//<!-- Nephtali Castañeda Nuñez -->
//<!--Martinez Ramirez Evelyn Maggali -->

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botonBuscar').addEventListener('click', function(event) {
        event.preventDefault();  
        
        var destino = document.getElementById('destino').value;
        
        var url = '';

        switch (destino) {
            case 'germany':
                url = 'Alemania.html';
                break;
            case 'france':
                url = 'Francia.html';
                break;
            case 'spain':
                url = 'España.html';
                break;
            case 'usa':
                url = 'EUA.html';
                break;
            case 'japan':
                url = 'Japon.html';
                break;
            case 'italy':
                url = 'Italia.html';
                break;
            case 'uk':
                url = 'UK.html';
                break;
            default:
                break;
        }
        // redirigir a la URL correspondiente
        window.location.href = url;
    });
});

//  alternar la visibilidad del chatbot
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
}

// manejar las opciones del chatbot
function handleOption(option) {
    const chatbotWindow = document.getElementById('chatbot-window');

    // mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    if (option === 'mapachetrip') userMessage.innerText = '¿Qué es MapacheTrip?';
    if (option === 'paises') userMessage.innerText = '¿A qué países puedo ir con MapacheTrip?';
    if (option === 'contacto') userMessage.innerText = '¿Cómo contacto a MapacheTrip?';
    chatbotWindow.appendChild(userMessage);

    // respuestas de pedroo
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    if (option === 'mapachetrip') botMessage.innerText = 'MapacheTrip es una agencia de viajes especializada en aventuras únicas.';
    if (option === 'paises') botMessage.innerText = 'Con MapacheTrip, puedes viajar a diversos destinos como Italia, España, Japón, y muchos más.';
    if (option === 'contacto') botMessage.innerText = 'Puedes contactar a MapacheTrip a través de nuestro correo mapachetrip@gmail.com o llamando al +52 7291027627';
    if (option === 'creadores') botMessage.innerText = ' Francisco, Nepthali y Maggali alumnos del IPN';
    chatbotWindow.appendChild(botMessage);

    //  botón de "Ver + preguntas"
    const moreQuestionsButton = document.createElement('button');
    moreQuestionsButton.innerText = 'Ver más preguntas';
    moreQuestionsButton.onclick = showOptions;
    chatbotWindow.appendChild(moreQuestionsButton);

    // Mantener el scroll 
    chatbotWindow.scrollTop = chatbotWindow.scrollHeight;
}

// Función para mostrar las opciones de nuevo
function showOptions() {
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotOptions = document.getElementById('chatbot-options');

    // opciones de nuevo
    const newOptions = chatbotOptions.cloneNode(true);
    newOptions.id = 'chatbot-options'; 

    chatbotWindow.appendChild(newOptions);
    chatbotWindow.scrollTop = chatbotWindow.scrollHeight;
}
