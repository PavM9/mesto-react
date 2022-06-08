import {useEffect, useState} from 'react';
import api from "../utils/api.js"
import Card from './Card'


function Main({ onEditAvatar,  onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getAppInfo()
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
