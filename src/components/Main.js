import React from 'react';
import Card from './Card'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar,  onEditProfile, onAddPlace, cards, onCardClick }) {
  const { name, about, avatar } = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <button
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={`${avatar}`}
            alt="Аватар профиля"
          />
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">
              {name}
            </h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__description">
            {about}
          </p>
        </div>
        <button
          className="profile__add-card-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>

      <section className="cards" aria-label="Галерея фото">
        <ul className="cards__container">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main
