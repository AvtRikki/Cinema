import BaseView from "../base-view";

export default class NavigationItemView extends BaseView {
    constructor(link, name, count) {
        super()
        this.link = link;
        this.name = name;
        this.count = count;
    }

    getTemplate() {
        let countPart = ''
        if (this.count > 0) {
            countPart = `<span class="main-navigation__item-count">${this.count}</span>`
        }

        return `<a href="${this.link}" class="main-navigation__item">${this.name} ${countPart}</a>`
    }
}
