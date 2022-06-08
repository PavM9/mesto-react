function Card({ card, onCardClick }) {

  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__info">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
          >
          </button>
          <span className="card__like-counter">
            {card.likes.length}
          </span>
        </div>
      </div>
      <button className="card__delete-button"/>
    </li>
  );
}

export default Card
