import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@app/core/models';
import { MovieService } from '@app/core/services';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-similar-grid',
  templateUrl: 'movie-similar-grid.component.html',
  styleUrls: ['movie-similar-grid.component.scss'],
})
export class MovieSimilarGridComponent implements OnInit {
  @Input() movieId: number;
  errorMessage = '';
  movieSimilar$: Observable<Movie[]>;
  isMovieSimilar;
  constructor(private movieService: MovieService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.movieSimilar$ = this.movieService.movieSimilar$(this.movieId).pipe(
      // tap((data) => console.log(data)),

      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    this.movieSimilar$.subscribe();
  }
}
