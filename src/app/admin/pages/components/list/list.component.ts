import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'controls'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  description: number;
  controls: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', description: 1.0079, controls: 'H' },
  { position: 2, name: 'Helium', description: 4.0026, controls: 'He' },
  { position: 3, name: 'Lithium', description: 6.941, controls: 'Li' },
  { position: 4, name: 'Beryllium', description: 9.0122, controls: 'Be' },
  { position: 5, name: 'Boron', description: 10.811, controls: 'B' },
  { position: 6, name: 'Carbon', description: 12.0107, controls: 'C' },
  { position: 7, name: 'Nitrogen', description: 14.0067, controls: 'N' },
  { position: 8, name: 'Oxygen', description: 15.9994, controls: 'O' },
  { position: 9, name: 'Fluorine', description: 18.9984, controls: 'F' },
  { position: 10, name: 'Neon', description: 20.1797, controls: 'Ne' },
  { position: 11, name: 'Sodium', description: 22.9897, controls: 'Na' },
  { position: 12, name: 'Magnesium', description: 24.305, controls: 'Mg' },
  { position: 13, name: 'Aluminum', description: 26.9815, controls: 'Al' },
  { position: 14, name: 'Silicon', description: 28.0855, controls: 'Si' },
  { position: 15, name: 'Phosphorus', description: 30.9738, controls: 'P' },
  { position: 16, name: 'Sulfur', description: 32.065, controls: 'S' },
  { position: 17, name: 'Chlorine', description: 35.453, controls: 'Cl' },
  { position: 18, name: 'Argon', description: 39.948, controls: 'Ar' },
  { position: 19, name: 'Potassium', description: 39.0983, controls: 'K' },
  { position: 20, name: 'Calcium', description: 40.078, controls: 'Ca' },
];
