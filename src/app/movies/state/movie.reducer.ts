import { Movie } from '@app/core/models';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  movies: MovieState;
}
export interface MovieState {
  showMovieIdState: boolean;
  currentMovieId: number;
  movies: Movie[];
}

const intialState: MovieState = {
  showMovieIdState: true,
  currentMovieId: null,
  movies: [],
};

const getMovieFeatureState = createFeatureSelector<MovieState>('movies');

export const getShowMovieIdState = createSelector(
  getMovieFeatureState,
  (state) => state.showMovieIdState
);
export const getCurrentMovieId = createSelector(
  getMovieFeatureState,
  (state) => state.currentMovieId
);
export const getMovies = createSelector(
  getMovieFeatureState,
  (state) => state.movies
);

export const movieReducer = createReducer<MovieState>(
  intialState,
  on(createAction('[Movie] Toggle Movie Id'), (state): MovieState => {
    // console.log('Orginal State: ' + JSON.stringify(state));
    return {
      ...state,
      showMovieIdState: !state.showMovieIdState,
    };
  })
);
