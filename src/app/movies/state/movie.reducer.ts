import { createAction, createReducer, on } from '@ngrx/store';

export const movieReducer = createReducer(
  { showMovieId: true },
  on(createAction('[Movie] Toggle Movie Id'), (state) => {
    // console.log('Orginal State: ' + JSON.stringify(state));
    return {
      ...state,
      showMovieId: !state.showMovieId,
    };
  })
);
