import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-genres-bar',
  templateUrl: 'movie-genres-bar.component.html',
  styleUrls: ['movie-genres-bar.component.scss'],
})
export class MovieGenresBarComponent implements OnInit {
  errorMsg = '';

  genres$ = this.moviesService.genres$.pipe(
    catchError((err) => {
      this.errorMsg = err;
      return EMPTY;
    })
  );

  constructor(private moviesService: MoviesService, private router: Router) {
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {}
}
