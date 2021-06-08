import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Movie, SliderMovie } from '@app/core/models';
import { Categories } from '@app/core/models/category';
import { Genre } from '@app/core/models/genres';
import { SliderMovieInit } from '@app/core/models/movie';
import { MoviesService } from '@app/core/services';
import { NgImageSliderComponent } from 'ng-image-slider';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-slider',
  templateUrl: 'movies-slider.component.html',
  styleUrls: ['movies-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesSliderComponent implements OnInit {
  @Input() genreId: number;
  @Input() genreTitle: string;
  @Input() category: string;
  @ViewChild('nav') slider: NgImageSliderComponent;
  sliderMovies$;
  sliderMoviesByCategory$;
  sliderMoviesValues: SliderMovie[] = [];

  errorMsg: any;
  constructor(private moviesService: MoviesService, private router: Router) {}

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

  imageClickHandle(e) {
    const object = this.sliderMoviesValues.find((item, index) => index === e);
    const movieId = object?.movieId;

    const categoryTitle = this.category
      ? Categories.find((c) => c.value === this.category).title
      : '';

    const backTitle = this.genreTitle ? this.genreTitle : categoryTitle;
    this.router.navigate(['./movies', movieId, backTitle]);
  }

  lazyLoading = true;
  imageSize = { width: 266, height: 400, space: 5 };
  slideImage = 3;
  animationSpeed = 0.5;

  ngOnInit(): void {
    // console.log(`GenreId ${this.genreId}`);
    if (this.genreId) {
      this.sliderMovies$ = this.moviesService.sliderMovies$(this.genreId).pipe(
        map((data) => (this.sliderMoviesValues = data)),
        catchError((err) => {
          this.errorMsg = err;
          return EMPTY;
        })
      );
      this.sliderMovies$.subscribe();
    } else {
      this.sliderMoviesByCategory$ = this.moviesService
        .sliderMoviesByCategory$(this.category)
        .pipe(
          map((data) => (this.sliderMoviesValues = data)),
          catchError((err) => {
            this.errorMsg = err;
            return EMPTY;
          })
        );
      this.sliderMoviesByCategory$.subscribe();
    }
  }
}
