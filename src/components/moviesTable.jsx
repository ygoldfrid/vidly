import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";
import auth from "../services/authService";

class MoviesTable extends Component {
  columns = [
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      ),
    },
  ];

  constructor() {
    super();
    const user = auth.getCurrentUser();
    this.addTitleColumn(user);
    if (user && user.isAdmin) this.addDeleteColumn();
  }

  addTitleColumn(user) {
    const titleColumn = { path: "title", label: "Title" };
    if (user)
      titleColumn.content = (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      );
    this.columns.unshift(titleColumn);
  }

  addDeleteColumn() {
    this.columns.push({
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    });
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
