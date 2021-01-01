import React from "react";
import { connect } from "react-redux";
import { addResource } from "../actions/addResource";

class ResourceInput extends React.Component {
  state = {
    categoryId: "",
    name: "",
    img_url: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("a");
    this.props.addResource(this.state);
    console.log("g");
    console.log(this.state);
    let categoryId = this.state.categoryId;
    this.props.history.push(`/categories/${categoryId}/resources`);
    this.setState({
      categoryId: "",
      name: "",
      img_url: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p> ADD A RESOURCE!</p>
          <br />
          <select
            name="categoryId"
            onChange={this.handleChange}
            value={this.state.categoryId}
            id="category"
          >
            <option>Category</option>
            {this.props.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {" "}
                {category.name}{" "}
              </option>
            ))}
          </select>
          <br />
          <br />
          {/* <label>Name:</label> */}
          <input
            placeholder="NAME"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          {/* <label>URL:</label> */}
          <input
            placeholder="URL"
            type="text"
            name="img_url"
            value={this.state.img_url}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </>
    );
  }
}

const mSTP = (globalState) => {
  return { categories: globalState.categories };
};

// const mDTP = dispatch => {
//     return {addResourceWithDispatch: () => dispatch(addResource(this.state))}
// }

export default connect(mSTP, { addResource })(ResourceInput);
/*
mapDispatchToProps = (dispatch) => {
    return {
        addResource: dispatch(addResource(resource))
    }
}
*/
