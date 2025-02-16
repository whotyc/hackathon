document.addEventListener("DOMContentLoaded", async () => {
    const search = document.getElementById("search");
    const heroesList = document.getElementById("heroesList");

    async function fetchHeroes(query = "") {
        const response = await fetch(`http://localhost:5000/heroes/all?search=${query}`);
        const heroes = await response.json();
        heroesList.innerHTML = heroes.map(hero => `<p>${hero.name} (${hero.rank})</p>`).join("");
    }

    search.addEventListener("input", () => fetchHeroes(search.value));
    fetchHeroes();
});
