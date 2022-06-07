import React from "react";
import api from "../utils/api.js"
import Card from './Card'


function Main({ onEditAvatar,  onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState([])
  const [userDescription, setUserDescription] = React.useState([])
  const [userAvatar, setUserAvatar] = React.useState([])
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cards]) => {
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={`${userAvatar}`}
            alt="Аватар профиля"
          />
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">
              {userName}
            </h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__description">
            {userDescription}
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
