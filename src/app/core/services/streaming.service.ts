import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Stream, StreamCountry, StreamStatus } from '../models';
import {
  ExtractData,
  HandleError,
  UrlGenerator,
  CountryName,
  CurrentCountryCode,
  StreamUrl,
} from '../utils';

@Injectable({
  providedIn: 'root',
})
export class StreamingService implements OnInit {
  countryCode;
  countryName;
  streamingUrl = UrlGenerator('normal', 'watch/providers', 'movie');
  streamingByMovieIdUrl = '';

  streams$ = this.http.get<Stream[]>(this.streamingUrl).pipe(
    map((streams) => ExtractData(streams)),
    map((streamingArray) =>
      streamingArray.filter(
        (x: Stream) =>
          x.provider_id === 390 ||
          x.provider_id === 119 ||
          x.provider_id === 350 ||
          x.provider_id === 8 ||
          x.provider_id === 15
        // 390  =>  Disney Plus
        // 119  =>  Amazon Prime Video
        // 350  =>  Apple TV Plus
        // 8    =>  Netflix
        // 15   =>  Hulu
      )
    ),
    map((streams) =>
      streams.map(
        (stream) =>
          ({
            ...stream,
            url: StreamUrl(stream.provider_name),
          } as Stream)
      )
    ),

    // tap((streams) => console.log(streams)),
    catchError(HandleError)
  );

  streamingByMovieId$ = (
    movieId: number,
    countryCode: string
  ): Observable<any> => {
    this.streamingByMovieIdUrl = UrlGenerator(
      'normal',
      'movie/' + movieId,
      'watch/providers'
    );
    return this.http.get<StreamStatus>(this.streamingByMovieIdUrl).pipe(
      map((streamings) => ExtractData(streamings, countryCode)),
      map((data: StreamCountry) => data.flatrate.map((stream) => stream)),
      map((streams) =>
        streams.map(
          (stream) =>
            ({
              ...stream,
              url: StreamUrl(stream.provider_name),
            } as Stream)
        )
      ),
      catchError(HandleError)
    );
  };

  async getUserCountry(): Promise<void> {
    // Move them to a Streaming Service
    this.countryCode = await CurrentCountryCode();
    this.countryName = await CountryName(this.countryCode);
  }

  constructor(private http: HttpClient) {
    // Test Section
    // this.streams$.subscribe();
  }

  ngOnInit(): void {}
}
