import getCharacterByName from '../service/getCharacterByName.js';
import charactersCardsListHomeView from '../view/charactersCardsListHomeView.js';

export default async function searchInputController() {
    try {
        const input = document.getElementById('character-name');
        let searchInputTxt = input.value.toLowerCase().trim();
        const characters = await getCharacterByName(searchInputTxt);
        charactersCardsListHomeView(characters);
    } catch (error) {
        window.location.hash = '#not-found';
    }
}

document.getElementById('search-button').addEventListener('click', event => {
    event.preventDefault();
    searchInputController();
});


