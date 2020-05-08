import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    const value = _.get(item, column.path); //item[column.path] for nested properties
    return typeof value === "number"
      ? new Intl.NumberFormat().format(value)
      : value;
  };

  createKey = (item, column, idProperty) => {
    return item[idProperty] + (column.path || column.key);
  };

  render() {
    const { data, columns, idProperty } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[idProperty]}>
            {columns.map((column) => (
              <td key={this.createKey(item, column, idProperty)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  idProperty: "_id",
};

export default TableBody;
