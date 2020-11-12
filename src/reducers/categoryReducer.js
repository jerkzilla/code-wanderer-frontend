export default function categoryReducer(state = {categories: []}, action) {

    switch(action.type) {
        case 'FETCH_CATEGORIES' :
            return {categories: action.payload}
        // case 'FETCH_RESOURCES' :
        //     return {resources: action.payload}

        case 'GET_RESOURCES' :
          
            let resources = state.categories.map(category => {
              if (category.name === action.payload){
              // debugger
                return category.resources
              }  
            })   
            // debugger     
        return {...state, resources: resources[0]}
            
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

