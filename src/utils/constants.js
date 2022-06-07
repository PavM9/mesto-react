// переменные элементов страницы
const cardsContainer = document.querySelector('.cards__container');
export const cardsContainerSelector = '.cards__container';
const cardTemplate = document.querySelector('#card-template');
export const cardTemplateSelector = '#card-template';
export const profileNameSelector = '.profile__name';
export const profileDescriptionSelector = '.profile__description';
export const profileAvatarSelector = '.profile__avatar'

//переменные для кнопок
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonEditAvatar = document.querySelector('.profile__avatar-button');
export const buttonAddCard = document.querySelector('.profile__add-card-button');

// переменные для popupEditProfile
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const formEditProfile = popupEditProfile.querySelector('.popup__form-container');
export const popupProfileName =  formEditProfile.querySelector('.popup__form-item_input_name');
export const popupProfileDescription = formEditProfile.querySelector('.popup__form-item_input_description');

// переменные для popupEditAvatar
const popupEditAvatar = document.querySelector('.popup_type_avatar');
export const formEditAvatar = popupEditAvatar.querySelector('.popup__form-container');

// переменные для popupAddCard
const popupAddCard = document.querySelector('.popup_type_add-card');
export const formAddCard = popupAddCard.querySelector('.popup__form-container');

// настройки валидации форм
export const settingsObj = {
  formSelector: '.popup__form-container',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-item_invalid',
  errorClassVisible: 'popup__error_visible'
}
