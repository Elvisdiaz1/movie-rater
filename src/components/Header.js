const Header = () => {
  return (
    <div className="heading">
      <h2>Movies Comparing App</h2>
      <span>
        There are 9 movies playing in theaters right now.
        {/* Make the 9 dynamic */}
      </span>
      <span>
        Click two or more movies to start comparing them. Movies with a vote
        average less than 7 with get a red background.
        {/* Make the 7 dynamic */}
      </span>
    </div>
  );
};

export default Header;
