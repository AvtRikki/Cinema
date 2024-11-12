import BaseView from "../base-view";

export default class CinemaSectionView extends BaseView {
    constructor(sectionName, isExtra) {
        super();
        this.sectionName = sectionName;
        this.isExtra = isExtra;
    }

    getTemplate() {
        return `<section class="films-list ${this.isExtra ? 'films-list--extra' : ''}">
                    <h2 class="films-list__title">${this.sectionName}</h2>
                </section>`
    }
}
