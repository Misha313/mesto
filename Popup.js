class Popup {

  constructor(popup) {
    this.popup = popup;
  }

  open() {
    console.log(this.namePersonField.value);
    this.popup.classList.add('popup_is-opened');
    this.setEventListenerClose()
  }

  close = () => {
    this.popup.classList.remove('popup_is-opened');
  }

  setEventListenerClose() {

    this.popup.querySelector('.popup__close').addEventListener('click', this.close)
  }

}