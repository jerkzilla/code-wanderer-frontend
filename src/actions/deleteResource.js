export const deleteResource = (categoryId, resourceId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/categories/${categoryId}/resources/${resourceId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        //   'Accepts': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(deletedObj => 
        dispatch({type: 'DELETE_RESOURCE', payload: deletedObj}))
        
    }
}