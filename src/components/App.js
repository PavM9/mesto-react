import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function handleEditAvatarClick() {  
    document.querySelector('.popup_type_avatar').classList.add('popup_is-opened'); 
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit-profile').classList.add('popup_is-opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add-card').classList.add('popup_is-opened');
}


function App() {
  return (
    <div className="page">
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick} 

      />
      <Footer/>

    <section className="popup popup_type_edit-profile">
      <div className="popup__container">
        <div className="popup__content">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form-container" name="edit-profile-form" novalidate>
            <input className="popup__form-item popup__form-item_input_name"
              minlength="2"
              maxlength="40"
              required
              type="text"
              name="name"
              id="name-input"
              placeholder="Имя"
              value=""/>
            <span className="popup__error name-input-error"></span>
            <input className="popup__form-item popup__form-item_input_description"
              minlength="2"
              maxlength="200"
              required
              type="text"
              name="description"
              id="description-input"
              placeholder="О себе"
              value=""/>
            <span className="popup__error description-input-error"></span>
            <button className="popup__submit-button" type="submit" disabled>Сохранить</button>
          </form>
        </div>
        <button className="popup__close-button" type="button"></button>
      </div>
    </section>

    <section className="popup popup_type_add-card">
      <div className="popup__container">
        <div className="popup__content">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form-container" name="add-card-form" novalidate>
            <input className="popup__form-item popup__form-item_card_title"
              minlength="2"
              maxlength="30"
              required
              type="text"
              name="name"
              id="title-input"
              placeholder="Название"
              value=""/>
            <span className="popup__error title-input-error"></span>
            <input className="popup__form-item popup__form-item_card_link"
              required
              type="url"
              name="link"
              id="link-input"
              placeholder="Ссылка на картинку"
              value=""/>
            <span className="popup__error link-input-error"></span>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
        </div>
        <button className="popup__close-button" type="button"></button>
      </div>
    </section>

    <section className="popup popup_type_image-fullscreen">
      <figure className="popup__image-container">
        <img className="popup__image" src="#" alt="#"/>
        <figcaption className="popup__image-caption"></figcaption>
        <button className="popup__close-button" type="button"></button>
      </figure>
    </section>

    <section className="popup popup_type_avatar">
      <div className="popup__container">
        <div className="popup__content">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form-container" name="avatar-form" noValidate>
            <input className="popup__form-item popup__form-item_avatar_link"
              required
              type="url"
              name="avatar"
              id="avatar-link-input"
              placeholder="Ссылка на картинку"
              value=""/>
            <span className="popup__error avatar-link-input-error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
        <button className="popup__close-button" type="button"></button>
      </div>
    </section>

    {/* <section className="popup popup_type_confirm">
      <div className="popup__container">
        <div className="popup__content">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form-container popup__form-container_confirm" name="confirm-form" novalidate>
            <button className="popup__submit-button" type="submit">Да</button>
          </form>
        </div>
        <button className="popup__close-button" type="button"></button>
      </div>
    </section> */}

  </div>
  );
}

export default App;
