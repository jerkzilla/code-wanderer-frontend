// export default function resourceReducer(state = {resources: []}, action ) {

//     switch(action.type) {
//         case 'GET_RESOURCES': 
//             let category = action.payload
            
//             return {...state, resources: category.resources}

//         case 'ADD_RESOURCES':
//             let categories = state.categories.map(category => {
//                 if (category.id === action.payload.category_id) {
//                     return {...category, resources: [...category.resources, action.payload]}
//                 } else {
//                     return category
//                 }
//                 })
//                 return {...state, categories: categories, resources: [...state.resources, action.payload] }
       
//         default: 
//         return state
//     }
    
// }