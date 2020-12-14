class PopupImage extends Popup {
  constructor(popup) {
    super(popup)
  }

  open = () => {
    if (event.target.classList.contains('place-card__image')) {
      console.log(this.popup)
      this.popup.classList.toggle('popup_is-opened');
      const imgUrl = event.target.style.backgroundImage.slice(5, -2);
      const imgInPopup = this.popup.querySelector('.popup-image__image');
      imgInPopup.setAttribute('src', imgUrl);
      this.setEventListenerClose()
    }
  }
}