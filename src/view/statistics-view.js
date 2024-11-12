import BaseView from "./base-view";

export default class StatisticsView extends BaseView {
    constructor(count) {
        super();
        this.count = count;
    }

    getTemplate() {
        return `<p>${this.count.toLocaleString().replace(/,/g, " ")} movies inside</p>`
    }
}
