import React from "react";

const TableHeadItem = ({ item }) => {
  return (
    <td className="table-heading" title={item}>
      {item}
    </td>
  );
};

export default TableHeadItem;
