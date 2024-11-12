import BaseView from "./base-view";

export default class ProfileView extends BaseView  {
    constructor(name, img) {
        super()
        this.name = name;
        this.img = img;
    }

    getTemplate() {
        return `<section class="header__profile profile">
                    <p class="profile__rating">${this.name}</p>
                    <img class="profile__avatar" src="${this.img}" alt="Avatar" width="35" height="35">
                </section>`
    }
}
