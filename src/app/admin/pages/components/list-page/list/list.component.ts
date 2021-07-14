import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DashboardService } from '@app/core/services';
import { List } from '@app/core/models';
import { pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public dashboardService: DashboardService) {}
  displayedColumns: string[] = ['name', 'description', 'show', 'controls'];
  dataSource = new MatTableDataSource<List>();
  listsWithShowValue: List[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) tableSort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    this.dashboardService.getLists().subscribe((data: List[]) => {
      this.dataSource.data = data;
    });
  }

  handlerDeleteList(id) {
    this.dashboardService.deleteList(id);
  }

  handlerShowList(showValue, id) {
    
    this.dashboardService.updateListShowValue(showValue, id);

    // let listShowStatus = this.dashboardService
    //   .getListById(id)
    //   .subscribe((data) => {
    //     // const listStatus = data.data().show;
    //     // console.log(`listStatus: ${listStatus}`);
    //     // console.log(`showValue: ${showValue}`);

    //     // if (listStatus === false) {
    //     //   this.dashboardService.updateListShowValue(showValue, id);
    //     //   // this.dashboardService.getLists().subscribe((data) => {
    //     //   //   this.listsWithShowValue = data.filter(
    //     //   //     (item) => item.show === true && item.listId !== id
    //     //   //   );
    //     //   //   console.log(JSON.stringify(this.listsWithShowValue));
    //     //   //   this.listsWithShowValue?.map((item) =>
    //     //   //     this.dashboardService.updateListShowValue(false, item.listId)
    //     //   //   );
    //     //   //   return;
    //     //   // });
    //     // } else {
    //     //   // if the User would to disable the Row
    //     //   this.dashboardService.updateListShowValue(showValue, id);
    //     // }
    //   });
  }
}
