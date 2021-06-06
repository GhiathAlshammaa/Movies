import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  searchMovies() {
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
