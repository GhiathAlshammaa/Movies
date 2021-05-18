import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesService } from '@app/core/services';
import { EMPTY, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  genreId = 99;
  errorMessage = '';
  // moviesUpcoming$ = this.moviesService.moviesUpcoming$.pipe(
  //   catchError((err) => {
  //     this.errorMessage = err;
  //     return EMPTY;
  //   })
  // );

  constructor(private moviesService: MoviesService) {}

  async ngOnInit() {}
}
