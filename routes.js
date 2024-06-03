import cardsCollectionController from "./controller/cardsCollectionController.js";
import searchInputController from "./controller/searchInputController.js";
import cardDetailsController from "./controller/cardDetailsController.js";
import errorController from "./controller/errorController.js";

export const routes = {
    home: {
        hash: '#home',
        init: cardsCollectionController
    },
    search: {
        hash: '#search',
        init: searchInputController
    },
    character: {
        hash: '#character',
        init: cardDetailsController
    },
    notFound: {
        hash: '#not-found',
        init: errorController
    }
};













