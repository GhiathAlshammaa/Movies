import { Movie } from '@app/core/models';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as MovieActions from '../state/movie.actions';
export interface State extends AppState.State {
  movies: MovieState;
}
export interface MovieState {
  showMovieIdState: boolean;
  currentMovieId: number;
  currentMovie: Movie;
  movies: Movie[];
}

const intialState: MovieState = {
  showMovieIdState: true,
  currentMovieId: null,
  currentMovie: null,
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
export const getCurrentMovie = createSelector(
  getMovieFeatureState,
  (state) => state.currentMovie
);
export const getMovies = createSelector(
  getMovieFeatureState,
  (state) => state.movies
);

export const movieReducer = createReducer<MovieState>(
  intialState,
  on(MovieActions.toggleMovieIdState, (state): MovieState => {
    // console.log('Orginal State: ' + JSON.stringify(state));
    return {
      ...state,
      showMovieIdState: !state.showMovieIdState,
    };
  }),
  on(MovieActions.setCurrentMovie, (state, action): MovieState => {
    return {
      ...state,
      currentMovie: action.movie,
    };
  }),
  on(MovieActions.clearCurrentMovie, (state): MovieState => {
    return {
      ...state,
      currentMovie: null,
    };
  }),
  on(MovieActions.initialieCurrentMovie, (state): MovieState => {
    return {
      ...state,
      currentMovie: {
        id: 0,
        title: '',
      },
    };
  })
);
