export const addResource = (resource) => {
  // debugger
  let object = { ...resource }
  let categoryId = object.categoryId
  delete object.categoryId
  object.category_id = categoryId
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch(`https://code-wanderer-backend.herokuapp.com/categories/${categoryId}/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resource)
    })
      .then(response => response.json())
      .then(resource => {
        console.log('d')
        if (resource.error) {
          alert(resource.error)
        } else {
          // debugger
          dispatch({ type: 'ADD_RESOURCE', payload: resource })
        }
      }
      )
    console.log('e')
  }
  console.log('f')
}