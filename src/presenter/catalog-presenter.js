import CinemaCatalogView from "../view/catalog/cinema-catalog-view";
import {render} from "../render";
import CinemaSectionView from "../view/catalog/cinema-section-view";
import CinemaButtonLoadMoreView from "../view/catalog/cinema-button-load-more-view";
import CinemaCardView from "../view/catalog/cinema-card-view";
import CinemaContainerView from "../view/catalog/cinema-container-view";

export default class CatalogPresenter {
    init(container) {
        const catalogView = new CinemaCatalogView();
        const catalogElement = catalogView.getElement();

        render(catalogView, container);

        const allMoviesSectionView = new CinemaSectionView('All movies. Upcoming');
        render(allMoviesSectionView, catalogElement);

        const cinemaAllMoviesContainerView = new CinemaContainerView();
        render(cinemaAllMoviesContainerView, allMoviesSectionView.getElement());
        const cinemaInfo = this.getMockCinemaInfo()
        for (let i = 0; i < 5; i++) {
            render(new CinemaCardView(cinemaInfo), cinemaAllMoviesContainerView.getElement())
        }

        render(new CinemaButtonLoadMoreView(), allMoviesSectionView.getElement())


        const topRatedSectionView = new CinemaSectionView('Top rated', true);
        render(topRatedSectionView, catalogElement);

        const cinemaTopRatedContainerView = new CinemaContainerView();
        render(cinemaTopRatedContainerView, topRatedSectionView.getElement());
        for (let i = 0; i < 2; i++) {
            render(new CinemaCardView(cinemaInfo), cinemaTopRatedContainerView.getElement())
        }


        const mostCommentedSectionView = new CinemaSectionView('Most commented', true);
        render(mostCommentedSectionView, catalogElement);

        const cinemaMostCommentedContainerView = new CinemaContainerView();
        render(cinemaMostCommentedContainerView, mostCommentedSectionView.getElement());
        for (let i = 0; i < 2; i++) {
            render(new CinemaCardView(cinemaInfo), cinemaMostCommentedContainerView.getElement())
        }
    }

    getMockCinemaInfo() {
        return {
            title: 'The Dance of Life',
            rating: 8.3,
            year: 1929,
            duration: '1h 55m',
            genre: 'Musical',
            poster: 'the-dance-of-life.jpg',
            description: 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
            comments: '5 comments'
        }
    }
}
