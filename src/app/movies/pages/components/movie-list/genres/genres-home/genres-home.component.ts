import { Component, OnInit } from '@angular/core';
import { Genre } from '@app/core/models/genres';
import { MoviesService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genres-home',
  templateUrl: 'genres-home.component.html',
  styleUrls: ['genres-home.component.scss'],
})
export class GenresHomeComponent implements OnInit {
  viewChildName: any;
  constructor(private moviesService: MoviesService) {}
  genres$: Observable<Genre[]>;
  ngOnInit(): void {
    this.genres$ = this.moviesService.genres$;
    this.viewChildName = `nav${12}`;
  }
}
