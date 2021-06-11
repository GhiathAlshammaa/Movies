import { Movie } from '@app/core/models';
import { createAction, props } from '@ngrx/store';

export const toggleMovieIdState = createAction('[Movie] Toggle Movie Id State');
export const setCurrentMovie = createAction(
  '[Movie] Set Current Movie',
  props<{ movie: Movie }>()
);
export const clearCurrentMovie = createAction('[Movie] Clear Current Movie');
export const initialieCurrentMovie = createAction(
  '[Movie] Initialize Current Movie'
);

export const loadMovies = createAction('[Movie] Load ');
export const loadMoviesSuccess = createAction(
  '[Movie] Load Success',
  props<{ movie: Movie[] }>()
);
export const loadMoviesFailure = createAction(
  '[Movie] Load Fail',
  props<{ error: string }>()
);
