import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DashboardService } from '@app/core/services';
import { List } from '@app/core/models';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public dashboardService: DashboardService) {}
  displayedColumns: string[] = ['name', 'description', 'controls'];
  dataSource = new MatTableDataSource<List>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) tableSort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    // this.lists$ = this.dashboardService.listData$;
    this.dashboardService.getLists().subscribe((data: List[]) => {
      this.dataSource.data = data;
      // this.dataSource.data.unshift(...data);
    });
  }

  handlerDeleteList(id) {
    // console.log(`ListId: ${id}`);
    this.dashboardService.deleteList(id);
  }
}
