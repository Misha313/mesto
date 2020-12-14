class PopupNewPlace extends Popup {
  constructor(popup, cardClass, cardList) {
    super(popup)

    this.cardClass = cardClass;
    this.cardList = cardList
  }

  open() {
    this.popup.classList.toggle('popup_is-opened');
    this.setEventListenerAddNewPlaceBtn()
    this.setEventListenerCloseClear()
    this.setEventListenerClose()

  }
  setEventListenerAddNewPlaceBtn() {
    this.popup.querySelector('.button').addEventListener('click', (evt) => this.handlerAddCard(evt))
  }

  setEventListenerCloseClear() {
    this.popup.querySelector('.popup__close').addEventListener('click', () => this.clearValue())
    this.popup.querySelector('.popup__button').addEventListener('click', () => this.clearValue())
  }

  handlerAddCard(evt) {
    evt.preventDefault()
    const name = this.popup.querySelector('.popup__input_type_name').value
    const url = this.popup.querySelector('.popup__input_type_link-url').value
    const cardInstance = this.cardClass.create(name, url)
    this.cardList.addCard(cardInstance)
    this.close()
  }






  clearValue() {
    console.log()
    const form = this.popup.querySelector('.popup__form')
    form.reset();
    this.popup.querySelector('.button').setAttribute('disabled', '')
    this.clear(form)
  }


  clear(form) {
    const error = form.querySelectorAll('.popup__error');
    error.forEach((el) => {
      el.textContent = ''
    })
  }
}




