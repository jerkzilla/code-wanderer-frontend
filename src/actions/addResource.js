export const addResource = (resource) => {
  let object = { ...resource };
  let categoryId = object.categoryId;
  delete object.categoryId;
  object.category_id = categoryId;
  return (dispatch) => {
    fetch(
      `https://code-wanderer-backend.herokuapp.com/categories/${categoryId}/resources`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
      }
    )
      .then((response) => response.json())
      .then((resource) => {
        if (resource.error) {
          alert(resource.error);
        } else {
          dispatch({ type: "ADD_RESOURCE", payload: resource });
        }
      });
  };
};
