import BaseView from "../base-view";
import {
    getCinemaDetailsActionsTemplate,
    getCinemaDetailsCommentsTemplate,
    getCinemaDetailsFormTemplate,
    getCinemaDetailsInfoTemplate
} from "./cinema-details-templates";

export default class CinemaDetailsView extends BaseView {
    getTemplate() {
        return `<section class="film-details">
                  <div class="film-details__inner">
                    <div class="film-details__top-container">
                      <div class="film-details__close">
                        <button class="film-details__close-btn" type="button">close</button>
                      </div>
                      ${getCinemaDetailsInfoTemplate()}
                      ${getCinemaDetailsActionsTemplate()}
                    </div>
                    <div class="film-details__bottom-container">
                      <section class="film-details__comments-wrap">
                        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
                        ${getCinemaDetailsCommentsTemplate()}
                        ${getCinemaDetailsFormTemplate()}
                      </section>
                    </div>
                  </div>
                </section>`
    }
}
