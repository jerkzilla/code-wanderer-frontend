import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteResource } from "../actions/deleteResource";

class Resource extends Component {
  handleClick = (event) => {
    event.preventDefault();
    let categoryId = event.target.dataset.categoryid;
    let resourceId = event.target.dataset.resourceid;
    this.props.deleteResource(categoryId, resourceId);
  };

  render() {
    return (
      <div>
        <li key={this.props.resource.id}>
          <a class="Thx" href={this.props.resource.img_url}>
            <iframe
              name={this.props.resource.name}
              src={this.props.resource.img_url}
              // alt={this.props.resource.name}
              // width="100%"
              // height="100%"
              // allowFullScreen=""
              width="100%"
              height="450vw"
              frameborder="0"
            />
            <br />
            <br />
            {this.props.resource.name}
          </a>
          <br />
          <br />
          <button
            class="btn-one"
            type="button"
            onClick={this.handleClick}
            data-resourceid={this.props.resource.id}
            data-categoryid={this.props.resource.category_id}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default connect(null, { deleteResource })(Resource);
