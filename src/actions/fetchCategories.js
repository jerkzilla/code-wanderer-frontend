export function fetchCategories() {
    return (dispatch) => {
    fetch('https://code-wanderer-backend.herokuapp.com/categories/')
    .then(resp => resp.json())
    .then(categories => dispatch({
        type: 'FETCH_CATEGORIES', 
        payload: categories
    }))
    }
     
    
}