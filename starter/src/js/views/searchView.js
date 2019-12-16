import {elements} from './base';


export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};
export const clearSearchResult = () => {
    elements.serachResultList.innerHTML = '';
}
const renderRecepie = (recepie) => {
    const markUp = `
    <li>
    <a class="results__link results__link--active" href="#${recepie.recipe_id}">
        <figure class="results__fig">
            <img src="${recepie.image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${recepie.title}</h4>
            <p class="results__author">${recepie.publisher}</p>
        </div>
    </a>
</li>
    `

    elements.serachResultList.insertAdjacentHTML('beforeend',markUp);
}

export const renderResults = (recepie) => {
    recepie.forEach(renderRecepie);
}