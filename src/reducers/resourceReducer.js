export default function resourceReducer(state = {resources: []}, action ) {

    switch(action.type) {
        case 'GET_RESOURCES': 
            let category = action.payload
            return {...state, resources: category.resources}

        case 'ADD_RESOURCE':
            // debugger
            // let categories = state.categories.map(category => {
            //     if (category.id === action.payload.category_id) {
            //         return {...category, resources: [...category.resources, action.payload]}
            //     } else {
            //         return category
            //     }
            //     })
                return {...state, resources: [...state.resources, action.payload] }
                
        case 'DELETE_RESOURCE':
                    // let categoryWithResourceToDelete = state.categories.find(category => {
                    //     return  category.id === action.payload.category_id
                    //     })
                    debugger
                    let updatedResources = state.resources.filter(resource => {
                       return resource.id !== action.payload.id
                    })
                    return {...state, resources: updatedResources}


        default: 
        return state
    }
    
}