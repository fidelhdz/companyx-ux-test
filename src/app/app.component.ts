import { Component } from '@angular/core';
import { Orders } from './models/orders.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neoris-ux-test';
  orders:Orders[] = [
    new Orders('First Avenue', 'Confirmed', 99820959, '775-KJ120/00011', 'Bulk Cement', 3, 'Sep 24, 2020 9:38 AM', 'Sep 23, 2020 4:56 PM'),
    new Orders('Centenial Mall', 'On Hold', 7543189, '775-KJ120/00012', 'Ready Mix', 1, 'Sep 21, 2020 3:20 AM', 'Sep 21, 2020 1:12 AM'),
    new Orders('Main Train Station', 'Confirmed', 1949409, '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 16, 2020 7:25 AM', 'Sep 14, 2020 3:43 AM'),
    new Orders('Auto Dealership', 'Confirmed', 7543189, '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 11, 2020 5:40 AM', 'Sep 11, 2020 10:23 AM'),
    new Orders('North Bridge', 'Blocked', 1949422, '775-KJ120/00014', 'Ready Mix', 1, 'Sep 10, 2020 4:39 PM', 'Sep 9, 2020 11:14 AM'),
    new Orders('Rapid Parks', 'Confirmed', 5736237, '775-KJ120/00020', 'Aggregates', 1, 'Sep 8, 2020 8:00 AM', 'Sep 4, 2020 7:24 AM'),
    new Orders('Centenial Mall', 'Confirmed', 5736245, '775-KJ120/00076', 'Aggregates', 1, 'Sep 3, 2020 6:55 PM', 'Sep 1, 2020 7:13 PM')
  ];
}
