import { Component, OnInit } from '@angular/core';
import { Orders } from './models/orders.model';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Orders';
  filteredLocations: any = [];
  lista_status: any = [];
  jobsites_list: any = [];
  productLine_list: any = [];
  statuses_list: any = [];
  orders2Show: any = [];

  data_views: any = [
    {
      item: 'Default (unfiltered)',
      show: true,
      removable: false
    },
    {
      item: 'Bulk Confirmed',
      show: true,
      removable: true
    },
    {
      item: 'Confirmed One',
      show: true,
      removable: true
    },
    {
      item: 'Confirmados Hold',
      show: true,
      removable: true
    }
  ];

  orders:Orders[] = [
    new Orders('First Avenue', 'Confirmed', 99820959, '775-KJ120/00011', 'Bulk Cement', 3, 'Sep 24, 2020 9:38 AM', 'Sep 23, 2020 4:56 PM'),
    new Orders('Centenial Mall', 'On Hold', 7543189, '775-KJ120/00012', 'Ready Mix', 1, 'Sep 21, 2020 3:20 AM', 'Sep 21, 2020 1:12 AM'),
    new Orders('Main Train Station', 'Confirmed', 1949409, '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 16, 2020 7:25 AM', 'Sep 14, 2020 3:43 AM'),
    new Orders('Auto Dealership', 'Confirmed', 7543189, '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 11, 2020 5:40 AM', 'Sep 11, 2020 10:23 AM'),
    new Orders('North Bridge', 'Blocked', 1949422, '775-KJ120/00014', 'Ready Mix', 1, 'Sep 10, 2020 4:39 PM', 'Sep 9, 2020 11:14 AM'),
    new Orders('Rapid Parks', 'Confirmed', 5736237, '775-KJ120/00020', 'Aggregates', 1, 'Sep 8, 2020 8:00 AM', 'Sep 4, 2020 7:24 AM'),
    new Orders('Centenial Mall', 'Confirmed', 5736245, '775-KJ120/00076', 'Aggregates', 1, 'Sep 3, 2020 6:55 PM', 'Sep 1, 2020 7:13 PM')
  ];

  ngOnInit() {
    this.count_Elements();
    this.get_jobsitesList();
    this.get_productLineList();
    this.get_statusesList();
    this.orders2Show = this.orders;
  }

  get_jobsitesList() {
    for (let i = 0; i < this.orders.length; i++ ) {
      let jobSite: string = this.orders[i].jobSite;

      if ( this.jobsites_list.indexOf(jobSite) === -1 ){
        this.jobsites_list.push( jobSite );
      }
    }
  }

  get_productLineList() {
    for (let i = 0; i < this.orders.length; i++ ) {
      let productLine: string = this.orders[i].productLine;

      if ( this.productLine_list.indexOf(productLine) === -1 ){
        this.productLine_list.push( productLine );
      }
    }
  }

  get_statusesList() {
    for (let i = 0; i < this.orders.length; i++ ) {
      let status: string = this.orders[i].status;

      if ( this.statuses_list.indexOf(status) === -1 ){
        this.statuses_list.push( status );
      }
    }
  }

  remove_arrayElement(arr: any, pos: number, name_array?: string) {
    console.log(arr, pos, name_array);
    arr.splice(pos, 1);
  }

  filter_jobsites( jobS: string ) {
    let indexLocation = this.jobsites_list.indexOf(jobS);
    
    if (indexLocation >= 0) {
      this.filteredLocations = this.orders2Show.filter((i:any) => i.jobSite === jobS);
    }
  }

  count_Elements() {
    let order_status: any = {};

    for (let i = 0; i < this.orders.length; i++ ) {
      let status: string = this.orders[i].status;
      
      if ( status in order_status ) {
        ++order_status[status];
      } else {
        order_status[status] = 1;
      }
    }

    for ( const obj in order_status ) {
      if ( order_status.hasOwnProperty( obj ) ) {
        this.lista_status.push( [ obj, order_status[obj] ] );
      }
    }
  }
}
