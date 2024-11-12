import {render} from "../render";
import CinemaDetailsView from "../view/details/cinema-details-view";

export default class CinemaDetailPresenter {
    init(container) {
        render(new CinemaDetailsView(), container);
    }
}
