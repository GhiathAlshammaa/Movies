import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-genre-movies-list',
  templateUrl: 'genre-movies-list.component.html',
  styleUrls: ['genre-movies-list.component.scss'],
})
export class GenreMoviesListComponent implements OnInit {
  genreId = 0;
  category = '';
  categoryTitle = '';
  genreTitle = '';
  moviesGenreById$;
  moviesByCategoryName$;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.category = this.route.snapshot.paramMap.get('name');
    this.categoryTitle =
      this.category[0].toUpperCase() + this.category.slice(1);

    this.genreId = +this.route.snapshot.paramMap.get('id');
    this.genreTitle = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    // console.log(`genreId: ${this.genreId}`);
    if (this.genreId) {
      this.moviesGenreById$ = this.moviesService
        .moviesGenreById$(this.genreId)
        .pipe(
          catchError((err) => {
            this.errorMsg = err;
            return EMPTY;
          })
        );
      this.moviesGenreById$.subscribe();
    } else if (this.category) {
      this.moviesByCategoryName$ = this.moviesService
        .moviesByCategory$(this.category)
        .pipe(
          catchError((err) => {
            this.errorMsg = err;
            return EMPTY;
          })
        );
      this.moviesByCategoryName$.subscribe();
    }
  }
}
