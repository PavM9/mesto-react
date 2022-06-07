import React from "react";

function PopupWithForm({ isOpen, name, title, children, submitText, onClose }) {
  return (
    <section className={
      isOpen
      ? `popup popup_type_${name} popup_is-opened`
      : `popup popup_type_${name}`}
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="popup__container"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="popup__content">
          <h2 className="popup__title">{title}</h2>
          <form
            className="popup__form-container"
            name={name}
            noValidate
          >
            {children}
            <button
              className="popup__submit-button"
              type="submit"
              disabled
            >
              {submitText}
            </button>
          </form>
        </div>
        <button
          className="popup__close-button"
          type="button"
          onClick={() => {
            onClose();
          }}
        />
      </div>
    </section>

  );
}

export default PopupWithForm
