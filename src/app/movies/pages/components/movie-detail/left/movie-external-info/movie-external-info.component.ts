import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';
import { StreamingService } from '@app/core/services/streaming.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-external-info',
  templateUrl: 'movie-external-info.component.html',
  styleUrls: ['movie-external-info.component.scss'],
})
export class MovieExternalInfoComponent implements OnInit {
  @Input() movie: Movie;
  streams$: Observable<any>;
  langFlag;

  // Photo Properties
  imgPath = 'https://image.tmdb.org/t/p/w500/';
  noPhotoSrc = '../../../../../../assets/noPhoto.jpg';
  errorMessage = '';
  langName: any;

  constructor(private streamingService: StreamingService) {}

  updateCountryToLowerCase() {
    return this.movie?.production_countries?.map((country) => {
      country.iso_3166_1 = country.iso_3166_1.toLocaleLowerCase();
    });
  }

  async ngOnInit() {
    this.updateCountryToLowerCase();
    this.langFlag = this.movie.spoken_languages.filter(
      (lang) => lang.iso_639_1 === this.movie.original_language
    );
    this.langName = this.langFlag[0].english_name;
    this.langFlag = this.langFlag[0].iso_639_1;

    await this.streamingService.getUserCountry();
    this.streams$ = this.streamingService
      .streamingByMovieId$(this.movie.id, this.streamingService.countryCode)
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      );
  }
}
