import '../index.css';
import {useEffect, useState} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const onEscClose = (event) => {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", onEscClose);
    return () => {
      document.removeEventListener("keydown", onEscClose);
    };
  }, []);

  return (
    <div className="page">
      <Header/>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
      />

      <Footer/>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        submitText="Сохранить"
      >
        <input
          className="popup__form-item popup__form-item_avatar_link"
          required
          type="url"
          name="avatar"
          id="avatar-link-input"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error avatar-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        submitText="Сохранить"
      >
        <input
          className="popup__form-item popup__form-item_input_name"
          minLength="2"
          maxLength="40"
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
        />
        <span className="popup__error name-input-error"></span>
        <input
          className="popup__form-item popup__form-item_input_description"
          minLength="2"
          maxLength="200"
          required
          type="text"
          name="description"
          id="description-input"
          placeholder="О себе"
        />
        <span className="popup__error description-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Новое место"
        submitText="Создать"
      >
        <input
          className="popup__form-item popup__form-item_card_title"
          minLength="2"
          maxLength="30"
          required
          type="text"
          name="name"
          id="title-input"
          placeholder="Название"
        />
        <span className="popup__error title-input-error"></span>
        <input
          className="popup__form-item popup__form-item_card_link"
          required
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name="confirm"
        title="Вы уверены?"
        submitText="Да"
      />
  </div>
  );
}

export default App;
