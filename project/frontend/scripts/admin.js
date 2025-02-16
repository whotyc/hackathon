document.addEventListener("DOMContentLoaded", async () => {
    const usersList = document.getElementById("usersList");
    const requestsList = document.getElementById("requestsList");

    async function fetchUsers() {
        const response = await fetch("http://localhost:5000/users");
        const users = await response.json();
        usersList.innerHTML = users.map(user => `<p>${user.name} - ${user.role}</p>`).join("");
    }

    async function fetchRequests() {
        const response = await fetch("http://localhost:5000/heroes/all");
        const requests = await response.json();
        requestsList.innerHTML = requests.map(request => `<p>${request.name} - ${request.status}</p>`).join("");
    }

    fetchUsers();
    fetchRequests();
});
