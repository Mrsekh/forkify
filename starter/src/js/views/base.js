export const elements = {
    submitSearch:document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    serachResultList:document.querySelector('.results__list'),
    serachLoader:document.querySelector('.results'),
    searchResPages:document.querySelector('.results__pages')
};

export const elementsString = {
    loader:'loader'
}

export const loader = (parent) => {
    const loader = `
            <div class = ${elementsString.loader}>
                <svg>
                    <use href="img/icons.svg#icon-cw"></use>
                </svg>
            </div>
    `;
    parent.insertAdjacentHTML('afterend',loader);

}
export const clearLoader = () => {
    const loader =  document.querySelector(`.${elementsString.loader}`);
    if(loader)  loader.parentElement.removeChild(loader);
}