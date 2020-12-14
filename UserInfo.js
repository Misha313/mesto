class UserInfo {
  constructor(name, about, userInfoContainer, api, editProfileClass) {
    this.name = name;
    this.about = about;
    this.userInfoContainer = userInfoContainer;
    this.api = api;
    this.editProfileClass = editProfileClass;
  }

  setUserInfo(result) {
    const avatar = this.userInfoContainer.querySelector('.user-info__photo')
    avatar.style.backgroundImage = `url(${result.avatar})`
    this.name.textContent = result.name
    this.about.textContent = result.about
  }

  updateUserInfo = (name, about) => {
    return this.api.editProfile(name, about)
      .then((res) => {
        this.name.textContent = res.name
        this.about.textContent = res.about
      })
      .catch((err) => {
        return Promise.reject(new Error(err.message));
      });
  }

}


