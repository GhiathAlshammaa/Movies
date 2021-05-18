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
  genreTitle = '';
  moviesGenreById$;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.genreId = +this.route.snapshot.paramMap.get('id');
    this.genreTitle = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    // console.log(`genreId: ${this.genreId}`);
    this.moviesGenreById$ = this.moviesService
      .moviesGenreById$(this.genreId)
      .pipe(
        catchError((err) => {
          this.errorMsg = err;
          return EMPTY;
        })
      );

    this.moviesGenreById$.subscribe();
  }
}
