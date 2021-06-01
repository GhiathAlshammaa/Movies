import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app/core/models/movie';
import { MovieService, MoviesService } from '@app/core/services';
import { StreamingService } from '@app/core/services/streaming.service';
import { NavigationService, UrlGenerator } from '@app/core/utils';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  errorMessage = '';
  movie$: Observable<Movie>;
  movieSimilar$: Observable<Movie[]>;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }


  async ngOnInit() {
    this.movie$ = await this.movieService.movie$(this.id).pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }
}
