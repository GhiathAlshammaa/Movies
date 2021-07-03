import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  template: ` <p>serie-detail works!</p> `,
  styles: [],
})
export class SerieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(`id: ${id}`);
    const pageTitle = this.route.snapshot.data['pageTitle'];
    // console.log(`pageTitle: ${pageTitle}`);
  }
}
