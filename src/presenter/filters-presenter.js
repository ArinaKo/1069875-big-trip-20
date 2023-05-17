import FiltersView from '../view/filters-view.js';
import { render } from '../framework/render.js';

export default class FiltersPresenter {
  #container = null;

  #filtersComponent = new FiltersView();

  constructor({ container }) {
    this.#container = container;
  }

  init() {
    render(this.#filtersComponent, this.#container);
  }
}
