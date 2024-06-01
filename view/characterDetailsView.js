export default function characterDetailsView(characterModel) {   
    const formSection = document.getElementById('form-section');
    formSection.style.display = 'none';

    const heroSection = document.getElementById('hero-section');
    heroSection.style.display = 'none';

    const headerName = document.getElementById('header-name');
    headerName.innerText = characterModel.name;

    const container = document.getElementById('card-container');
    container.innerHTML = ''; 

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'character-details';

    const image = document.createElement('img');
    image.src = characterModel.image;
    detailsDiv.appendChild(image);

    const status = document.createElement('p');
    status.innerText = `Status: ${characterModel.status}`;
    detailsDiv.appendChild(status);

    const species = document.createElement('p');
    species.innerText = `Species: ${characterModel.species}`;
    detailsDiv.appendChild(species);

    const gender = document.createElement('p');
    gender.innerText = `Gender: ${characterModel.gender}`;
    detailsDiv.appendChild(gender);

    const location = document.createElement('p');
    location.innerText = `Location: ${characterModel.locationName}`;
    detailsDiv.appendChild(location);

    const backButton = document.createElement('button');
    backButton.innerText = 'Back to Home';
    backButton.addEventListener('click', () => {
        window.location.hash = '#home';
    });
    detailsDiv.appendChild(backButton);

    container.appendChild(detailsDiv);
}







