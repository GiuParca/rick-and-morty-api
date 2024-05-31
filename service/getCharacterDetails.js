import CharacterModel from "../models/characterModel.js";

export default async function getCharacterDetails(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!response.ok) {
        throw new Error("Oooops...Could not fetch resource as you wish hahaha");
    }

    const data = await response.json();
    return new CharacterModel(
        data.id,
        data.name,
        data.status,
        data.species,
        data.gender,
        data.image,
        data.url,
        data.location.name
    );
}
