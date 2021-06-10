import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getShowMovieIdState, State } from '@app/movies/state/movie.reducer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Movies';
  searchStr: string;
  searchMoviesResults$;
  errorMsg: any;
  displayMovieIdState = false;

  constructor(
    private store: Store<State>,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    //TODO: Unsubscribe
    this.store
      .select(getShowMovieIdState)
      .subscribe(
        (showMovieIdState) => (this.displayMovieIdState = showMovieIdState)
      );
  }

  checkChanged() {
    this.store.dispatch({ type: '[Movie] Toggle Movie Id' });
  }

  searchMovies() {
    if (this.searchStr) {
      this.searchMoviesResults$ = this.moviesService
        .searchMovies$(this.searchStr)
        .pipe(
          catchError((err) => {
            this.errorMsg = err;
            return EMPTY;
          })
        );
      this.searchMoviesResults$.subscribe();
    }
  }
}
