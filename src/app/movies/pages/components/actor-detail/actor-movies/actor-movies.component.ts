import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models';

@Component({
  selector: 'app-actor-movies',
  templateUrl: 'actor-movies.component.html',
  styleUrls: ['actor-movies.component.scss'],
})
export class ActorMoviesComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() movieTitle: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
