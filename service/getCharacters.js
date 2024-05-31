import CharacterModel from "../models/characterModel.js";

export default async function getCharacters(page) {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

    if (!response.ok) {
        throw new Error("Could not fecth resource")
    }

    const data = await response.json();
    const characters = [];
    data.results.forEach(result => {
        let character = new CharacterModel(result.id, result.name, result.status, result.species, result.gender, result.image, result.url, result.location.name)
        characters.push(character);


    });
    return characters;
}


