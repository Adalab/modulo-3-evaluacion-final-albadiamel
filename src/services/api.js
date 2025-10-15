const getCharacters = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const characterData = data.map(character => {
                return {
                    id: character.id,
                    image: character.image,
                    name: character.name,
                    species: character.species,
                    house: character.house,
                    alive: character.alive
                }
            })
            console.log(characterData)
            return characterData;
        })
};

export default getCharacters;