import BaseView from "../base-view";
import {getCinemaCardActionsTemplate} from "./cinema-card-actions-template.js";

export default class CinemaCardView extends BaseView {
    constructor(cinemaInfo) {
        super()
        this.cinemaInfo = cinemaInfo
    }

    getTemplate() {
        return `<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${this.cinemaInfo.title}</h3>
            <p class="film-card__rating">${this.cinemaInfo.rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${this.cinemaInfo.year}</span>
              <span class="film-card__duration">${this.cinemaInfo.duration}</span>
              <span class="film-card__genre">${this.cinemaInfo.genre}</span>
            </p>
            <img src="./images/posters/${this.cinemaInfo.poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${this.cinemaInfo.description}</p>
            <span class="film-card__comments">${this.cinemaInfo.comments}</span>
          </a>
          ${getCinemaCardActionsTemplate()}
        </article>`
    }
}
