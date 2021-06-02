import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '@app/core/models';
import { StaffService } from '@app/core/services';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-actor-detail',
  templateUrl: 'actor-detail.component.html',
  styleUrls: ['actor-detail.component.scss'],
})
export class ActorDetailComponent implements OnInit {
  actor$;
  cast$;

  // Photo Properties
  noPhotoSrc = '../../../../../../assets/noPhoto.jpg';
  imgPath = 'https://image.tmdb.org/t/p/w500/';

  actorId = 0;
  errorMsg: any;
  movieTitle: string;
  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actorId = +this.route.snapshot.paramMap.get('id');
    this.movieTitle = this.route.snapshot.paramMap.get('movieTitle');
    // console.log(`actorId: ${this.actorId}`);
    console.log(`movieTitle: ${this.movieTitle}`);

    this.actor$ = this.staffService.actorById$(this.actorId).pipe(
      catchError((err) => {
        this.errorMsg = err;
        return EMPTY;
      })
    );
    this.actor$.subscribe();

    this.cast$ = this.staffService.castByActorId$(this.actorId).pipe(
      catchError((err) => {
        this.errorMsg = err;
        return EMPTY;
      })
    );
  }
}
