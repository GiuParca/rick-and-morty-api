import CharacterModel from "../models/characterModel.js";

const characters = [];
const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');
let page = 1;
const totalPages = 42;

export default async function getCharacters(page) {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

    if (!response.ok) {
        throw new Error("Could not fecth API")
    }

    const data = await response.json();
    data.results.forEach(result => {
        let character = new CharacterModel(result.id, result.name, result.status, result.species, result.gender, result.image, result.url, result.location.name)
        characters.push(character);


    });
    return characters;
}


function pagination(page) {
    prevBtn.addEventListener('click', () => {
        if (page > 1) {
            page--;
            getCharacters(page).then(characters.forEach(result => {
                let character = new CharacterModel(result.id, result.name, result.status, result.species, result.gender, result.image, result.url, result.location.name)
                characters.push(character);
            }))
        }
    })


nextBtn.addEventListener('click', () => {
    if (page < 42) {
        page++;
        getCharacters(page).then(characters.forEach(result => {
            let character = new CharacterModel(result.id, result.name, result.status, result.species, result.gender, result.image, result.url, result.location.name)
            characters.push(character);
        }))
    }
})
};

pagination();