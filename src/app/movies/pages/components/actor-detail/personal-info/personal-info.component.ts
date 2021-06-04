import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '@app/core/models';

@Component({
  selector: 'app-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() person: Actor;
  // Photo Properties
  noPhotoSrc = '../../../../../../assets/noPhoto.jpg';
  imgPath = 'https://image.tmdb.org/t/p/w500/';
  
  constructor() {}

  ngOnInit(): void {}
}
