import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements,loader,clearLoader} from './views/base';
/* State management 
// Global state of the app
// Search object
// recepie object
// Shopping list object
// Liked Recepies
*/
const state = {};
const controlSearch = async () => {
    const query = searchView.getInput();
    console.log(query);
    // create a new Search objevt and add a state
    if(query) {
        state.search = new Search(query);
        // prepare UI for the result
        searchView.clearInput();
        searchView.clearSearchResult(); 
        loader(elements.serachLoader);
        //Getting the recepie results
        await state.search.getResult();
        clearLoader();
    
        // Render results in UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
        
    }  
}

elements.submitSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click' ,e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearSearchResult(); 
        searchView.renderResults(state.search.result,goToPage,10);
        // console.log(goToPage);
    }
    // console.log(btn);
});
