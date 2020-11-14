export const addResource = (resource) => {
  
  let categoryId = resource.categoryId
    return (dispatch) => {
      fetch(`http://localhost:3000/categories/${categoryId}/resources`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resource)
      })
      .then(response => response.json())
      .then(category => {
          if (category.error) {
            alert(category.error)
          } else {
            dispatch({type: 'ADD_RESOURCE', payload: category})
          }
        }
      )
    }
  }