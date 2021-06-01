import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';
import { NavigationService } from '@app/core/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-internal-info',
  templateUrl: 'movie-internal-info.component.html',
  styleUrls: ['movie-internal-info.component.scss'],
})
export class MovieInternalInfoComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private navigation: NavigationService) {}

  back(): void {
    this.navigation.back();
  }

  ngOnInit(): void {}
}
