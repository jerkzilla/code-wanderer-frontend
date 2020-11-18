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
        case 'DELETE_RESOURCE':
              let categoryWithResourceToDelete = state.categories.find(category => {
                        return  category.id === action.payload.category_id
                         })
              let resourcesWithoutDeletedResource = categoryWithResourceToDelete.resources.filter(resource => {
                 return resource.id !== action.payload.id
              })

              categoryWithResourceToDelete.resources = resourcesWithoutDeletedResource
              let updatedCategories = state.categories.map(category => {
                if (category.id === categoryWithResourceToDelete.id) {
                  return categoryWithResourceToDelete
                } else {
                  return category
                }
              })
              return {...state, categories: updatedCategories}
              
              // const delResource = action.payload  
              // return state.resources.filter(resource => resource.id !== action.payload.id)
//           let categoriesTwo = state.categories.find(category => 
//             (category.id === action.payload.category_id) 
// )
//           // debugger
//           
                                 
//           return {...state, resources: [...state.resources, resourcesWithoutDeletedObject] }
           
          default:   
          return state
    }
}