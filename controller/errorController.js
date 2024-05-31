export default function errorController() {
    const container = document.getElementById('card-container');
    if (container) {
        container.innerHTML = '<h1>404 - Page Not Found</h1>';
    } else {
        console.error('Error: Page Not Found');
    }
}


