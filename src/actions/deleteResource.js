// export const deleteResource = (event) => {

//     // console.log(event)
//     const resourceObjID = parseInt(event.target.dataset.resourceid)
//     // const toyObjID = event.target.dataset.toyid
  
//     return ((dispatch) => {
//       fetch(`http://localhost:3000/categories/${categoryId}/${resourceObjID}`, {
//         method: "delete",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accepts': 'application/json'
//         }
//       })
//       .then(resp => resp.json())
//       .then(deletedObj => dispatch({type: 'DELETE_RESOURCE', payload: resourceObjID}))
//     })
//   }