async function fetchPokemon() {
  try {
    const search = document.getElementById("search").value.toLowerCase();
    const respon = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await respon.json();
    const detail = data;
    const pokemonSpire = data.sprites.front_default;
    const gambar = document.getElementById("gambarPokemon");
    gambar.src = pokemonSpire;
    gambar.style.display = "block";

    gambar.onclick = function () {
      // displayPokemonDetails(currentPokemonData);

      const { name, types, weight, height } = detail;
      console.log(height);
      const wadahDetail = document.getElementById("detail");
      wadahDetail.innerHTML = name;
    };
  } catch (e) {
    console.log(e);
  }
}
