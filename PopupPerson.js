class PopupPerson extends Popup {
  constructor(popup, namePersonField, aboutPersonField, userInfo, api) {
    super(popup)
    this.namePersonField = namePersonField
    this.aboutPersonField = aboutPersonField
    this.userInfo = userInfo;
    this.api = api;
    this.form = popup.querySelector('.popup__form')
    this.button = popup.querySelector('.button')

  }

  open() {
    this.popup.classList.toggle('popup_is-opened');
    this.namePersonField.value = this.userInfo.name.textContent
    this.aboutPersonField.value = this.userInfo.about.textContent
    this.setEventListenerSubmitForm()

    this.setEventListenerClose()
  }

  close(evt) {
    evt.target.removeEventListener('click', (evt) => {
      this.handlerAddPersonData(evt);
      this.button.setAttribute("disabled", "disabled");
    })
  }

  handlerAddPersonData(evt) {
    this.userInfo.updateUserInfo(this.namePersonField.value, this.aboutPersonField.value)
      .then(() => this.close(evt))
      .catch((err) => Promise.reject(new Error(err.message)))
  }

  sendDataForUpdate = (evt) => {
    this.button.setAttribute("disabled", "disabled");
    evt.preventDefault();
    this.handlerAddPersonData(evt)
  }

  setEventListenerSubmitForm = () => {
    this.form.addEventListener('submit', this.sendDataForUpdate)
  }

}