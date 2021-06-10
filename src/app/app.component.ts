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
    // Array para el filtrado
    filteredLocations: any = [];
    // Array que se usa para el conteo de elementos y tener un estadístico visual en pantalla
    lista_status: any = [];
    // Arrays para listado de controles como dropdowns
    jobsites_list: any = [];
    productLine_list: any = [];
    statuses_list: any = [];
    // Array para vaciar datos de array de ordenes y no alterar el original
    orders2Show: any = [];

    // Array para la lista de filtros
    filters_list: any = [];

    // Conocer si existen filtros o no
    existFilters: boolean = false;

    // Tipo de filtro
    filter_type: string = '';

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

    // Array generado bajo un modelo ORDERS
    orders: Orders[] = [
        new Orders('First Avenue', 'Confirmed', '99820959', '775-KJ120/00011', 'Bulk Cement', 3, 'Sep 24, 2020 9:38 AM', 'Sep 23, 2020 4:56 PM'),
        new Orders('Centenial Mall', 'On Hold', '7543189', '775-KJ120/00012', 'Ready Mix', 1, 'Sep 21, 2020 3:20 AM', 'Sep 21, 2020 1:12 AM'),
        new Orders('Main Train Station', 'Confirmed', '1949409', '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 16, 2020 7:25 AM', 'Sep 14, 2020 3:43 AM'),
        new Orders('Auto Dealership', 'Confirmed', '7543189', '775-KJ120/00013', 'Bulk Cement', 1, 'Sep 11, 2020 5:40 AM', 'Sep 11, 2020 10:23 AM'),
        new Orders('North Bridge', 'Blocked', '1949422', '775-KJ120/00014', 'Ready Mix', 1, 'Sep 10, 2020 4:39 PM', 'Sep 9, 2020 11:14 AM'),
        new Orders('Rapid Parks', 'Confirmed', '5736237', '775-KJ120/00020', 'Aggregates', 1, 'Sep 8, 2020 8:00 AM', 'Sep 4, 2020 7:24 AM'),
        new Orders('Centenial Mall', 'Confirmed', '5736245', '775-KJ120/00076', 'Aggregates', 1, 'Sep 3, 2020 6:55 PM', 'Sep 1, 2020 7:13 PM')
    ];

    ngOnInit() {
        this.count_Elements();
        this.get_jobsitesList();
        this.get_productLineList();
        this.get_statusesList();
        this.reset_Array();
    }

    // Obtener listado de JOBSITES
    get_jobsitesList() {
        for (let i = 0; i < this.orders.length; i++) {
            let jobSite: string = this.orders[i].jobSite;

            if (this.jobsites_list.indexOf(jobSite) === -1) {
                this.jobsites_list.push(jobSite);
            }
        }
    }

    // Obtener LISTA DE PRODUCTOS
    get_productLineList() {
        for (let i = 0; i < this.orders.length; i++) {
            let productLine: string = this.orders[i].productLine;

            if (this.productLine_list.indexOf(productLine) === -1) {
                this.productLine_list.push(productLine);
            }
        }
    }

    // Obtener listado de STATUS
    get_statusesList() {
        for (let i = 0; i < this.orders.length; i++) {
            let status: string = this.orders[i].status;

            if (this.statuses_list.indexOf(status) === -1) {
                this.statuses_list.push(status);
            }
        }
    }

    // Remover elementos de un ARRAY
    // @param arr: Arreglo
    // @param pos: Indice o posición a eliminar
    // @param name (Opcional): Nombre del Arreglo
    remove_arrayElement(arr: any, pos: number, name?: string) {
        arr.splice(pos, 1);

        if ( name !== undefined && name === 'filters_array' && arr.length === 0 ) {
            this.clear_filters();
        }
    }

    // Filtrado por jobSites
    filter_jobsites(jobS: string, multiply: boolean = false) {
        let indexLocation = this.jobsites_list.indexOf(jobS);

        if ( !multiply ) {
            this.reset_Array();
        }

        this.filter_type = 'jobSite';
        if (indexLocation >= 0) {
            this.orders2Show = this.orders2Show.filter((i: any) => i.jobSite === jobS);
        }
    }

    // Filtrado por Order ID
    filter_orderID(type: string, multiply: boolean = false) {
        this.filter_type = 'order';

        if ( !multiply ) {
            this.reset_Array();
        }
        if ( type !== '' ) {
            this.orders2Show = this.orders2Show.filter((i: any) => i.order === type);
        }
    }

    // Filtrado por Status
    filter_status(type: string, multiply: boolean = false) {
        this.filter_type = 'status';

        if ( !multiply ) {
            this.reset_Array();
        }
        this.orders2Show = this.orders2Show.filter((i: any) => i.status === type);
    }

    // Filtrado por Cantidad
    filter_quantity(type: string, multiply: boolean = false) {
        this.filter_type = 'quantity';

        if ( !multiply ) {
            this.reset_Array();
        }
        this.orders2Show = this.orders2Show.filter((i: any) => i.quantity === parseInt(type));
    }

    // Filtrado por Cantidad
    filter_purchaseOrder(type: string, multiply: boolean = false) {
        this.filter_type = 'purchaseOrder';

        if ( !multiply ) {
            this.reset_Array();
        }
        this.orders2Show = this.orders2Show.filter((i: any) => i.purchaseOrder === type);
    }

    // Limpiar el área de filtros
    clear_filters() {
        let el: any = document.querySelector('.filters-selected');

        this.reset_Array();

        this.filters_list = [];
        el.classList.add('no-visible');
    }

    // Activar el área de filtros
    add_filters() {
        let el: any = document.querySelector('.filters-selected');

        this.filters_list = [];
        this.set_filters();

        if ( this.existFilters ) {
            el.classList.remove('no-visible');
        }
    }

    // Mostrar o esconder el campo de texto para nombrar el DATA VIEW
    setDataViewName() {
        let dataVName: any = (document.querySelector('#set-dv-name') as HTMLInputElement);

        if ( dataVName.classList.value === 'no-visible' ) {
            dataVName.classList.remove('no-visible');
        } else {
            dataVName.classList.add('no-visible');
        }
        
    }

    clear_form() {
        let form: any = ( document.querySelector('#modalFiltersForm'));

        form.reset();
        this.reset_Array();
        this.setDataViewName();
    }

    // Setting filters
    set_filters() {
        let jobS: any = (document.querySelector('#jobsites-select') as HTMLInputElement).value;
        let prodL: any = (document.querySelector('#product-line-select') as HTMLInputElement).value;
        let statS: any = (document.querySelector('#statuses-select') as HTMLInputElement).value;
        let qty: any = (document.querySelector('#quantity') as HTMLInputElement).value;
        let ordN: any = (document.querySelector('#order-number') as HTMLInputElement).value;
        let purO: any = (document.querySelector('#purchase-order') as HTMLInputElement).value;
        let asView: boolean = (document.querySelector('#as-view') as HTMLInputElement).checked ? true : false;
        let nameV: any = ( (document.querySelector('#naming-view') as HTMLInputElement).value !== '' ) ? (document.querySelector('#naming-view') as HTMLInputElement).value : 'New Data View ' + this.data_views.length;
        let countingElements: number = 0;
        
        if ( jobS !== '-' ) {
            this.filters_list.push( { type: 'jobSite', name: jobS } );
            ++countingElements;
            this.filter_jobsites(jobS, true);
        }
        if ( prodL !== '-' ) {
            this.filters_list.push( { type: 'Product Line', name: prodL } );
            ++countingElements;
        }
        if ( statS !== '-' ) {
            this.filters_list.push( { type: 'Status', name: statS } );
            ++countingElements;
            this.filter_status(statS, true);
        }
        if ( parseInt(qty) > 0 ) {
            this.filters_list.push( { type: 'Quantity', name: qty } );
            ++countingElements;
            this.filter_quantity(qty, true);
        }
        if ( ordN !== '' ) {
            this.filters_list.push( { type: 'Order Number', name: ordN } );
            ++countingElements;
            this.filter_orderID(ordN, true);
        }
        if ( purO !== '' ) {
            this.filters_list.push( { type: 'Purchase Order', name: purO } );
            ++countingElements;
            this.filter_purchaseOrder(purO, true);
        }
        if ( asView && countingElements > 0 ) {
            this.data_views.push(
                { item: nameV, show: true, removable: true }
            );
        }

        if ( countingElements > 0 ) {
            this.existFilters = true;
        } else {
            this.reset_Array();
        }
        
    }

    // Reset Data Array
    reset_Array() {
        this.orders2Show = this.orders;
    }

    // Conteo de elementos bajo el dato de STATUS para obtener un estadístico visual en pantalla
    count_Elements() {
        let order_status: any = {};

        for (let i = 0; i < this.orders.length; i++) {
            let status: string = this.orders[i].status;

            if (status in order_status) {
                ++order_status[status];
            } else {
                order_status[status] = 1;
            }
        }

        for (const obj in order_status) {
            if (order_status.hasOwnProperty(obj)) {
                this.lista_status.push([obj, order_status[obj]]);
            }
        }
    }
}
