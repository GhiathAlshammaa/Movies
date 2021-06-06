import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Movie, SliderMovie } from '../models/movie';
import {
  ExtractData,
  HandleError,
  SubtractDates,
  UrlGenerator,
} from '../utils';
import * as moment from 'moment';
import { Genres } from '../models';
@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  // Url Params initialization
  language = 'en-US';
  pageNum = 1;
  restUrlValue = `&language=${this.language}&page=${this.pageNum}`;

  // Bringing a today date, in order to know since when the Movie released
  today = moment.now();

  // test temporary property
  movieId = 0;
  genreId = 0;
  sliderMoviesAll: SliderMovie[] = [];
  sliderMoviesTemp: SliderMovie[] = [];
  sliderMovies: SliderMovie[] = [];
  imgPath = 'https://image.tmdb.org/t/p/w500/';
  noPhotoSrc = '../../../../../../assets/noPhoto.jpg';

  // ## Generating Url
  urlUpcoming = UrlGenerator('normal', 'movie', 'upcoming', this.restUrlValue);
  urlCountries = UrlGenerator('config', '', 'countries');
  urlGenres = UrlGenerator('normal', 'genre', 'movie/list');
  urlGenresById = '';

  constructor(private http: HttpClient) {
    // Url Test Section
    // console.log(`urlUpComing: ${this.urlUpComing}`);
    // console.log(`urlCountries: ${this.urlCountries}`);
    // console.log(`urlGenres: ${this.urlGenres}`);
    // console.log(`urlGenres: ${this.urlGenresById}`);
  }

  // Array contains all the Movies in "UpComing" Section
  moviesUpcoming$ = this.http.get<Movie[]>(this.urlUpcoming).pipe(
    map((data) => ExtractData(data)),
    map((movies) =>
      movies.map(
        (movie) =>
          ({
            ...movie,
            sinceHowManyDays: SubtractDates(movie.release_date),
          } as Movie)
      )
    ),
    // tap((movies) => console.log(movies)),
    catchError(HandleError)
  );

  genres$ = this.http.get<Genres>(this.urlGenres).pipe(
    map((genres) => genres.genres),
    // tap((genres) => console.log(genres)),
    catchError(HandleError)
  );

  moviesGenreById$ = (id: number) => {
    this.urlGenresById = UrlGenerator('normal', 'genre/' + id, 'movies');

    return this.http.get<Movie[]>(this.urlGenresById).pipe(
      map((data) => ExtractData(data)),
      // tap((data) => console.log(data)),
      catchError(HandleError)
    );
  };

  sliderMovies$ = (id: number) => {
    // console.log(`id: ${id}`);
    this.urlGenresById = UrlGenerator('normal', 'genre/' + id, 'movies');
    // console.log(`url: ${this.urlGenresById}`);

    return this.http.get<Movie[]>(this.urlGenresById).pipe(
      map((data) => ExtractData(data)),
      // tap((data) => console.log(data)),

      map((movies) => {
        movies.map((movie) => {
          const slideMovie: SliderMovie = {
            genreId: id,
            movieId: movie.id,
            image: this.imgPath + movie.poster_path,
            thumbImage: this.imgPath + movie.poster_path,
            alt: movie.title,
            title: movie.title,
          };

          const checkMovieDuplicateInAll = this.sliderMoviesAll.find(
            (m) => m.movieId === movie.id
          );
          const checkMovieDuplicateInSliderMovies = this.sliderMoviesAll.find(
            (m) => m.movieId === movie.id
          );

          if (!checkMovieDuplicateInAll) {
            this.sliderMoviesAll = [...this.sliderMovies, slideMovie];
          }
          if (!checkMovieDuplicateInSliderMovies) {
            this.sliderMovies = [...this.sliderMovies, slideMovie];
          }
        });
        this.sliderMoviesTemp = this.sliderMovies;
        this.sliderMovies = [];
        return this.sliderMoviesTemp;
      }),
      // tap((data) => console.log(data)),
      catchError(HandleError)
    );
  };
  sliderMoviesByCategory$ = (category: string) => {
    // console.log(`category: ${category}`);
    const apiUrl = UrlGenerator('normal', 'movie', category, this.restUrlValue);
    // console.log(`apiUrl: ${apiUrl}`);

    return this.http.get<Movie[]>(apiUrl).pipe(
      map((data) => ExtractData(data)),
      // tap((data) => console.log(data)),

      map((movies) => {
        movies.map((movie) => {
          const slideMovie: SliderMovie = {
            movieId: movie.id,
            image: this.imgPath + movie.poster_path,
            thumbImage: this.imgPath + movie.poster_path,
            alt: movie.title,
            title: movie.title,
          };

          const checkMovieDuplicateInAll = this.sliderMoviesAll.find(
            (m) => m.movieId === movie.id
          );
          const checkMovieDuplicateInSliderMovies = this.sliderMoviesAll.find(
            (m) => m.movieId === movie.id
          );

          if (!checkMovieDuplicateInAll) {
            this.sliderMoviesAll = [...this.sliderMovies, slideMovie];
          }
          if (!checkMovieDuplicateInSliderMovies) {
            this.sliderMovies = [...this.sliderMovies, slideMovie];
          }
        });
        this.sliderMoviesTemp = this.sliderMovies;
        this.sliderMovies = [];
        return this.sliderMoviesTemp;
      }),
      catchError(HandleError)
    );
  };

  moviesByCategory$ = (category: string) => {
    // console.log(`category: ${category}`);
    const apiUrl = UrlGenerator('normal', 'movie', category, this.restUrlValue);
    // console.log(`apiUrl: ${apiUrl}`);

    return this.http.get<Movie[]>(apiUrl).pipe(
      map((data) => ExtractData(data)),
      catchError(HandleError)
    );
  };

  searchMovies$ = (searchStr: string) => {
    this.restUrlValue += `&query=${searchStr}`;
    const apiUrl = UrlGenerator('normal', 'search', 'movie', this.restUrlValue);
    // console.log(`apiUrl of searchMovies: ${apiUrl}`);

    return this.http.get<Movie[]>(apiUrl).pipe(
      map((data) => ExtractData(data)),
      catchError(HandleError)
    );
  };

  ngOnInit() {}
}
