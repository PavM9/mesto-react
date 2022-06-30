import React from 'react';
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cards, userData]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // React.useEffect(() => {
  //   api
  //     .getProfile()
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // React.useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((cards) => {
  //       setCards(cards);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  function handleCardLike(card) {
    api
      .addLike(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDislike(card) {
    api
      .removeLike(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Отправляем запрос в API на удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
				setCards(cards => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  React.useEffect(() => {
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

  function handleUpdateUser(userData) {
    api
      .editProfile(userData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDislike={handleCardDislike}
          onCardDelete={handleCardDelete}
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
  </CurrentUserContext.Provider>
  );
}

export default App;
