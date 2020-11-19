export default function categoryReducer(state = {categories: [], resources: []}, action) {

    switch(action.type) {
        case 'FETCH_CATEGORIES' :
            return {...state, categories: action.payload}
        case 'GET_RESOURCES' :
          let category = action.payload
        return {...state, resources: category.resources}
            
        case 'ADD_RESOURCE':
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
           
          default:   
          return state
    }
}