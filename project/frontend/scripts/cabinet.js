document.addEventListener("DOMContentLoaded", async () => {
    const profileForm = document.getElementById("profileForm");

    profileForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const position = document.getElementById("position").value;
        const email = document.getElementById("email").value;

        const response = await fetch("http://localhost:5000/users/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, position, email }),
        });

        alert((await response.json()).message);
    });
});
