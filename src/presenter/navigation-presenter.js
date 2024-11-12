import {render} from "../render";
import NavigationView from "../view/navigation/navigation-view";
import NavigationItemView from "../view/navigation/navigation-item-view";

export default class NavigationPresenter {
    init(container) {
        const navigationView = new NavigationView();
        const navigationElement = navigationView.getElement();

        render(navigationView, container);
        render(new NavigationItemView('#all', 'All movies'), navigationElement);
        render(new NavigationItemView('#watchlist', 'Watchlist', 13), navigationElement);
        render(new NavigationItemView('#history', 'History', 4), navigationElement);
        render(new NavigationItemView('#favorites', 'Favorites', 8), navigationElement);
    }
}
