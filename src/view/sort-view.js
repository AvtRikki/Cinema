import BaseView from "./base-view";

export default class SortView extends BaseView {
    getTemplate() {
        return `<ul class="sort">
                    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
                    <li><a href="#" class="sort__button">Sort by date</a></li>
                    <li><a href="#" class="sort__button">Sort by rating</a></li>
                </ul>`
    }
}
