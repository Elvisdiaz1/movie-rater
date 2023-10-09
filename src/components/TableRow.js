import React from "react";

const TableRow = ({ movie }) => {
  return (
    <tr>
      {movie.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
