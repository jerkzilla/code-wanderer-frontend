export default function categoryReducer(state = {categories: [], resources: []}, action) {

    switch(action.type) {
        case 'FETCH_CATEGORIES' :
            return {...state, categories: action.payload}
        // case 'FETCH_RESOURCES' :
        //     return {resources: action.payload}

        case 'GET_RESOURCES' :
          // debugger
          let category = action.payload
            // debugger     
        return {...state, resources: category.resources}
            
        case 'ADD_RESOURCE':
          // debugger
          
            let categories = state.categories.map(category => {
                if (category.id === action.payload.category_id) {
                  return {...category, resources: [...category.resources, action.payload]}
                } else {
                  return category
                }
              })
              return {...state, categories: categories, resources: [...state.resources, action.payload] }
            
           
          default:   
          return state
    }
}

