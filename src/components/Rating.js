const Rating = ({ movies, column }) => {
  if (movies.length === 0) {
    return;
  }
  return (
    <table>
      <thead>
        <tr className="table-heading">
          {column.map((movie, index) => (
            <TableHeading movie={movie} key={index} />
          ))}
        </tr>
      </thead>
      <tbody>
        {movies
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 9)
          .map((movie) => (
            <TableRowItem movie={movie} column={column} key={movie.id} />
          ))}
      </tbody>
    </table>
  );
};

const TableHeading = ({ movie }) => <th>{movie.heading}</th>;
const TableRowItem = ({ movie, column }) => {
  return (
    <tr
      style={{
        backgroundColor: movie.vote_average > 7 ? "green" : "red",
      }}
    >
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split(".");
          return <td>{movie[itemSplit[0]][itemSplit[1]]}</td>;
        }

        return <td>{movie[`${columnItem.value}`]}</td>;
      })}
    </tr>
  );
};

export default Rating;
