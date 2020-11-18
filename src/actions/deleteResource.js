export const deleteResource = (categoryId, resourceId) => {

    // console.log(categoryId, resourceId)
    // const resourceObjID = parseInt(event.target.dataset.resourceid)
    // const categoryId = parseInt(event.target.dataset.category_id)
  
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