// Vérifie si l'utilisateur est connecté et est un administrateur
window.onload = function() {
    const username = localStorage.getItem("username");

    if (username !== "admin") {
        // Si l'utilisateur n'est pas admin, redirige vers la page de connexion
        window.location.href = "login.html";
    }

    // Afficher les utilisateurs et messages
    loadUsers();
    loadMessages();
};

// Charger et afficher les utilisateurs
function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users") || '[]');
    const userListContainer = document.getElementById("user-list");
    userListContainer.innerHTML = ""; // Clear current list

    users.forEach((user, index) => {
        const userDiv = document.createElement("div");
        userDiv.textContent = user.username;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.onclick = function() {
            deleteUser(index);
        };
        userDiv.appendChild(deleteBtn);
        userListContainer.appendChild(userDiv);
    });
}

// Charger et afficher les messages du chat
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages") || '[]');
    const chatMessagesContainer = document.getElementById("chat-messages");
    chatMessagesContainer.innerHTML = ""; // Clear current messages

    messages.forEach((message, index) => {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = `${message.username}: ${message.text}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.onclick = function() {
            deleteMessage(index);
        };
        messageDiv.appendChild(deleteBtn);
        chatMessagesContainer.appendChild(messageDiv);
    });
}

// Supprimer un utilisateur
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem("users") || '[]');
    users.splice(index, 1); // Supprime l'utilisateur à l'index spécifié
    localStorage.setItem("users", JSON.stringify(users)); // Sauvegarde la liste mise à jour
    loadUsers(); // Recharge la liste des utilisateurs
}

// Supprimer un message
function deleteMessage(index) {
    const messages = JSON.parse(localStorage.getItem("messages") || '[]');
    messages.splice(index, 1); // Supprime le message à l'index spécifié
    localStorage.setItem("messages", JSON.stringify(messages)); // Sauvegarde les messages mis à jour
    loadMessages(); // Recharge les messages
}
