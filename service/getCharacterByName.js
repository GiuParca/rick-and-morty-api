import CharacterModel from "../models/characterModel.js";

export default async function getCharacterByName(name) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);

        if (!response.ok) {
            throw new Error("Ooops...Could not fetch resource");
        }

        const data = await response.json();
        const characters = data.results.map(result => new CharacterModel(
            result.id,
            result.name,
            result.status,
            result.species,
            result.gender,
            result.image,
            result.url,
            result.location.name
        ));
        return characters;
    } catch (error) {
        throw new Error(`Um error aí`);
    }
}



