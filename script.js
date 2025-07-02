async function fetchPokemon() {
  try {
    const search = document.getElementById("search").value.toLowerCase();
    const respon = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await respon.json();

    if (!data) {
      alert("nama pokemon tidak valid");
    }
    const detail = data;
    const pokemonSpire = data.sprites.front_default;
    const gambar = document.getElementById("gambarPokemon");
    gambar.src = pokemonSpire;
    gambar.style.display = "block";

    gambar.onclick = function () {
      // displayPokemonDetails(currentPokemonData);

      const { name, weight, height } = detail;
      console.log(height);
      const namaPok = document.getElementById("nama");
      const weightPok = document.getElementById("weight");
      const heightPok = document.getElementById("height");
      const detailpok = document.getElementById("detail");
      detailpok.style.display = "block";
      namaPok.innerHTML = "Nama Pokemon " + " - " + " " + name;
      weightPok.innerHTML = "Berat Pokemon " + " - " + " " + weight;
      heightPok.innerHTML = "Tinggi Pokemon " + " - " + " " + height;
    };
  } catch (e) {
    alert("pokemon tidak ditemukan");
  }
}
