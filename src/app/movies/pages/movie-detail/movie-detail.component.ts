import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '@app/core/models/category';
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
  backTitle: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.backTitle = this.route.snapshot.paramMap.get('backTitle');

    // check if the backTitle was a Category and improve it
    // console.log(`backTitle: ${this.backTitle}`);
    const categoryTitle = Categories.find(
      (c) => c.value === this.backTitle
    )?.title;
    // console.log(`categoryTitle: ${categoryTitle}`);
    if (categoryTitle) {
      this.backTitle = categoryTitle;
    }
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
