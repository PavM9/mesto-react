import React from "react";

function Main() {
  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button">
          <img className="profile__avatar" src="#" alt="Аватар профиля"/>
        </button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button"></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-card-button" type="button"></button>
      </section>

      <section className="cards" aria-label="Галерея фото">
        <ul className="cards__container">
        </ul>
      </section>
    </main>
  );
}

export default Main
