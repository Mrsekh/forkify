import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';
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
        //Getting the recepie results
        await state.search.getResult();
    
        // Render results in UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
        
    }  
}

elements.submitSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    controlSearch();
});
