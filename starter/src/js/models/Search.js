// axios is used to fetch the data from an API
import axios from 'axios';
export default class Search  {
    constructor(query) {
        this.query = query;
    }
    async getResult () {
        //const proxy = `https://crossorigin.me`;
        try {
            const searchResult = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = searchResult.data.recipes;
            // console.log(this.result);
        }catch(error) {
            alert(error);
        }
        
    }
}
