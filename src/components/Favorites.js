const Favorites = ({ savedGems }) => {
  return (
    <div className="favorite">
      <h3>Favorites</h3>
      {savedGems.map(savedGem => {
        return <p key={savedGem.sha}>{savedGem.name}</p>;
      })}
    </div>
  );
};

export default Favorites;
