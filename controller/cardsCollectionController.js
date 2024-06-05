import getCharacters from '../service/getCharacters.js';
import charactersCardsListHomeView from '../view/charactersCardsListHomeView.js';


export default async function cardsCollectionController(page) {
    try {
        let characters = await getCharacters(page);
        charactersCardsListHomeView(characters);
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

cardsCollectionController();




