import { routes } from './routes.js';

function route() {
    const windowHash = window.location.hash;

    let route = Object.values(routes).find(({ hash }) => windowHash.startsWith(hash));

    if (!route) {
        route = routes.notFound;
    }

    route.init();
}

window.onhashchange = route;

window.onload = () => {
    if (!window.location.hash) {
        window.location.hash = routes.home.hash;
    }
    route();
};





