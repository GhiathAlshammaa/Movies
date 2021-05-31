import { Component, OnInit } from '@angular/core';
import { Categories, Category } from '@app/core/models/category';
import { Genre } from '@app/core/models/genres';
import { MoviesService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genres-home',
  templateUrl: 'genres-home.component.html',
  styleUrls: ['genres-home.component.scss'],
})
export class GenresHomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  genres$: Observable<Genre[]>;
  categoryMovies: Observable<Genre[]>;

  categories: Category[] = Categories;
  ngOnInit(): void {
    this.genres$ = this.moviesService.genres$;
  }
}
