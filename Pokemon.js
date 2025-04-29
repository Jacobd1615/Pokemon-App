// Fetches Pokémon data from the PokeAPI and displays it on the page
async function fetchPokemon(pokemonNameOrId) {
    const pokemonContainer = document.getElementById('pokemon');

    // If no input is provided, show a message and exit
    if (!pokemonNameOrId) {
        pokemonContainer.innerHTML = 'Please enter a Pokemon name or ID';
        return;
    }

    try {
        // Fetch data from the PokeAPI
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
        );
        if (!response.ok) {
            throw new Error("Error catching Pokemon: " + response.statusText);
        }
        const data = await response.json();
        displayPokemon(data); // Display the fetched Pokémon data
    } catch (error) {
        // Show an error message if fetch fails
        pokemonContainer.innerHTML =
            "<p>Error: Pokemon not found. Please check name or ID.</p>";
        console.error("Error fetching Pokemon data:", error);
    }

    
     //Display Pokémon data on the page.
   
    function displayPokemon(pokemon) {
        const pokemonContainer = document.getElementById("pokemon");
        pokemonContainer.innerHTML = "";

        // Create a card to display Pokémon info
        const card = document.createElement("div");
        card.classList.add("card");

        // Pokémon name (capitalize first letter)
        const name = document.createElement("h2");
        name.textContent =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        // Pokémon image
        const img = document.createElement("img");
        img.src = pokemon.sprites.front_default;
        img.alt = `${pokemon.name} Image`;

        // Pokémon type(s)
        const type = document.createElement("p");
        const types = pokemon.types
            .map((typeInfo) => typeInfo.type.name)
            .join(", ");
        type.textContent = `Type: ${types}`;

        // Add elements to the card and display it
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(type);
        pokemonContainer.appendChild(card);
    }
}

/**
 * Handles the search button click event.
 * Gets the input value and calls fetchPokemon.
 */
function searchPokemon() {
    console.log("Search button clicked"); // Debug log
    const inputElement = document.getElementById("pokemon-search");

    // Check if input element exists
    if (!inputElement) {
        console.error("Error: #pokemon-search input not found in DOM");
        return;
    }

    // Get and trim the user's input
    const pokemonInput = inputElement.value.trim();
    fetchPokemon(pokemonInput);
}
