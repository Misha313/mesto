class FormValidator {
  constructor(form) {
    this.form = form
  }

  getErrorMassage(element) {
    return this.form.querySelector(`.popup__error[data-for='${element.name}']`)
  }

  checkInputValidity(element) {
    if (element.tagName !== 'INPUT') return true;
    const validity = element.validity;
    if (validity.valid) {
      this.getErrorMassage(element).textContent = "";
      return true
    }
    if (validity.valueMissing) {
      this.getErrorMassage(element).textContent = 'Это обязательное поле';
      return false;
    }
    if (validity.tooShort || validity.tooLong) {
      this.getErrorMassage(element).textContent = 'Введите от 2 до 30 символов';
      return false;
    }
    if (validity.typeMismatch && element.type === 'url') {
      this.getErrorMassage(element).textContent = 'Введите ссылку';
      return false;
    }
  }

  setSubmitButtonForm(btn, form) {
    btn.disabled = !form.checkValidity();
  }

  handleSendToValidate() {
    const formBtn = this.form.querySelector('.popup__button')
    this.checkInputValidity(event.target)
    this.setSubmitButtonForm(formBtn, this.form)
  }

  setEventListeners() {
    this.form.addEventListener('input', (event) => this.handleSendToValidate(event))
  }
}