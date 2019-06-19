const Favorites = ({ savedGems }) => {
  return (
    <div className="favorite">
      <h3>Favorites</h3>
      {savedGems.map((savedGem, index) => {
        return <p key={index}>{savedGem.name}</p>;
      })}
    </div>
  );
};

export default Favorites;
