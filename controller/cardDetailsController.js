import getCharacterDetails from '../service/getCharacterDetails.js';
import characterDetailsView from '../view/characterDetailsView.js';

export default async function cardDetailsController() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const characterId = params.get('id');

    if (!characterId) {
        window.location.hash = '#not-found';
        return;
    }

    try {
        const character = await getCharacterDetails(characterId);
        characterDetailsView(character);
    } catch (error) {
        console.error('Error:', error);
        window.location.hash = '#not-found';
    }
}






