export default function categoryReducer(state = {categories: []}, action) {

    switch(action.type) {
        case 'FETCH_CATEGORIES' :
            return {categories: action.payload}
        // case 'FETCH_RESOURCES' :
        //     return {resources: action.payload}

        case 'GET_RESOURCES' :
          // debugger
          let category = action.payload
            // debugger     
        return {...state, resources: category.resources}
            
        case 'ADD_RESOURCE':
            let categories = state.categories.map(category => {
                if (category.id === action.payload.id) {
                  return action.payload
                } else {
                  return category
                }
              })
              return {...state, categories: categories}
            
           
            default:   
            return state
    }
}

