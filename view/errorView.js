import homeController from '../controller/homeController.js';

export default function errorView() {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-container';

    const errorMessage = document.createElement('h1');
    errorMessage.innerText = '404 - Page Not Found';
    errorDiv.appendChild(errorMessage);

    const errorImage = document.createElement('img');
    errorImage.src = './error-rick-morty.jpg'; 
    errorImage.alt = 'Error Image';
    errorDiv.appendChild(errorImage);

    const backButton = document.createElement('button');
    backButton.innerText = 'Back to Home';
    backButton.addEventListener('click', () => {
        homeController();
    });
    errorDiv.appendChild(backButton);

    container.appendChild(errorDiv);
}
