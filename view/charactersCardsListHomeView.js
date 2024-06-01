import characterCardView from './characterCardView.js';

export default function charactersCardsListHomeView(characterModelList) {
    const container = document.getElementById('card-collection');
    if (container) {
        container.innerHTML = '';

        characterModelList.forEach(characterModel => {
            const card = characterCardView(characterModel);
            container.appendChild(card);
        });
    } else {
        console.error("Error");
    }

    const heroSection = document.getElementById('hero-section');
    heroSection.style.display = 'flex';

    const formSection = document.getElementById('form-section');
    formSection.style.display = 'flex';

}


