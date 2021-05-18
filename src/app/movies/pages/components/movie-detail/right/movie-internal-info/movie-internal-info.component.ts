import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-internal-info',
  templateUrl: 'movie-internal-info.component.html',
  styles: [],
})
export class MovieInternalInfoComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
