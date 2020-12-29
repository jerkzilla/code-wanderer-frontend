import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Category = (props) => {
  return (
    <>
      <Link class="header2" to={`/categories/${props.category.id}/resources`}>
        <>
          {" "}
          <button class="btn-one">{props.category.name}</button>{" "}
        </>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Category);
