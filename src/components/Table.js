import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, customClass }) => {
  console.log("tbodyData:", tbodyData);
  const isTableEmpty = tbodyData.length === 0;

  if (isTableEmpty) {
    return <p>Nothing to see here</p>;
  }
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item.items} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
