import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-list',
  template: ` <p>serie-list works!</p> `,
  styles: [],
})
export class SerieListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pageTitle = this.route.snapshot.data['pageTitle'];
    console.log(`pageTitle: ${pageTitle}`);
  }
}
