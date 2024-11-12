import {render} from './render.js';
import ProfileView from "./view/profile-view";
import NavigationPresenter from "./presenter/navigation-presenter";
import SortView from "./view/sort-view";
import StatisticsView from "./view/statistics-view";
import CatalogPresenter from "./presenter/catalog-presenter";
import CinemaDetailPresenter from "./presenter/cinema-detail-presenter";

const header = document.querySelector('.header');
render(new ProfileView('Movie Buff', 'images/bitmap@2x.png'), header);

const main = document.querySelector('.main');
const navigationPresenter = new NavigationPresenter();
navigationPresenter.init(main)

render(new SortView(), main)

const catalogPresenter = new CatalogPresenter();
catalogPresenter.init(main)

const footer = document.querySelector('.footer');
const footerStatistics = footer.querySelector('.footer__statistics');
render(new StatisticsView(130291), footerStatistics)

const detailsPresenter = new CinemaDetailPresenter();
detailsPresenter.init(main)
