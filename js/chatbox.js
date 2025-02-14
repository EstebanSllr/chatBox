document.getElementById("send-btn").addEventListener("click", function() {
    const message = document.getElementById("user-input").value;
    const username = localStorage.getItem("username");

    if (username && message.trim() !== "") {
        const messages = JSON.parse(localStorage.getItem("messages") || '[]');
        messages.push({ username, text: message }); // Ajoute le message au tableau
        localStorage.setItem("messages", JSON.stringify(messages)); // Sauvegarde les messages
        displayMessages(); // Met à jour l'affichage des messages
    }

    document.getElementById("user-input").value = ""; // Vide le champ de texte
});

// Afficher les messages
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem("messages") || '[]');
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; // Clear current messages

    messages.forEach(message => {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = `${message.username}: ${message.text}`;
        chatBox.appendChild(messageDiv);
    });
}

// Initialisation de l'affichage des messages
displayMessages();
