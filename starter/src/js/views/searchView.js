import {elements} from './base';
// Get the search input value
export const getInput = () => elements.searchInput.value;
// clear the input field after each search
export const clearInput = () => {
    elements.searchInput.value = '';
};
// clear search result to prevent the append of search results from each call
export const clearSearchResult = () => {
    elements.serachResultList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}
// recepieTitle check for within the limit  
const limitrecepieTitle  = (title,limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc,cur) => {
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        },0);
        return `${newTitle.join(' ')}...`;
    }
    return title;
}
// render recepie in UI
const renderRecepie = (recepie) => {
    const markUp = `
    <li>
    <a class="results__link results__link--active" href="#${recepie.recipe_id}">
        <figure class="results__fig">
            <img src="${recepie.image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitrecepieTitle(recepie.title)}</h4>
            <p class="results__author">${recepie.publisher}</p>
        </div>
    </a>
</li>
    `

    elements.serachResultList.insertAdjacentHTML('beforeend',markUp);
}
// creating button
const createButton = (page,type) => `
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1: page + 1}>
<span>Page ${type === 'prev' ? page - 1: page + 1}</span>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
</svg>

</button>
`
const renderButtons = (page,numResults,resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if(page === 1 && pages > 1) {
       button =  createButton(page,'next');
        // only button go to next page
    }else if(page < pages) {
        // Both  button should appear
        button =  `${createButton(page,'prev')}
                    ${createButton(page,'next')}
        `;
    }else if(page === pages && pages > 1) {
        //only button for previous page
        button =  createButton(page,'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin',button);
}

// implementing the pagination technique
export const renderResults = (recepie,page = 1,resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recepie.slice(start,end).forEach(renderRecepie);
    renderButtons(page,recepie.length,resPerPage);  
}