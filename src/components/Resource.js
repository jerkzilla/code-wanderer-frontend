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
            <img
              src={this.props.resource.img_url}
              alt={this.props.resource.name}
              width="150"
              height="150"
            />
            <br />
            <br />
            {this.props.resource.name}
          </a>
          <button
            class="glow-on-hover"
            type="button"
            onClick={this.handleClick}
            data-resourceid={this.props.resource.id}
            data-categoryid={this.props.resource.category_id}
          >
            -Delete-
          </button>
        </li>
      </div>
    );
  }
}

export default connect(null, { deleteResource })(Resource);
