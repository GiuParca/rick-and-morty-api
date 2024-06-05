import characterCardView from './characterCardView.js';

const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');
let page = 1;
const totalPages = 42;

export default function charactersCardsListHomeView(characterModelList) {
    const container = document.getElementById('card-collection');
    if (container) {
        container.innerHTML = '';

        characterModelList.forEach(characterModel => {
            const card = characterCardView(characterModel);
            container.appendChild(card);
        });

        const imgHeroSection = document.getElementById('img-hero');
        const formSection = document.getElementById('form-section');

        if (imgHeroSection && formSection) {
            imgHeroSection.style.display = 'flex';
            formSection.style.display = 'flex';
        } else {
            console.error("Error: imgHeroSection or formSection not found");
        }
    } else {
        console.error("Error: container not found");
    }
    pagination();
}

function pagination() {
    const pagesElement = document.getElementById('pagination');
    pagesElement.textContent = `Page ${page} of ${totalPages}`;

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === 42;
}

