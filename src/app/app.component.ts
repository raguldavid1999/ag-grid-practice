import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Angular Data Grid Component
import { AgGridAngular } from 'ag-grid-angular';
// Column Definition Type Interface
import { ColDef, GridApi, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule])

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ag-grid-practice';
  // rowData:any = [
  //   {
  //     name: 'John Doe',
  //     age: 30,
  //     country: 'USA',
  //     email: 'john@example.com',
  //     salary: 75000,
  //     department: 'Engineering',
  //     status: 'Active',
  //     joinDate: '2022-01-15'
  //   },
  //   {
  //     name: 'Mary Smith',
  //     age: 28,
  //     country: 'UK',
  //     email: 'mary@example.com',
  //     salary: 65000,
  //     department: 'Marketing',
  //     status: 'Active',
  //     joinDate: '2022-03-20'
  //   },
  //   {
  //     name: 'Bob Wilson',
  //     age: 32,
  //     country: 'Canada',
  //     email: 'bob@example.com',
  //     salary: 80000,
  //     department: 'Sales',
  //     status: 'Inactive',
  //     joinDate: '2021-11-10'
  //   }
  // ];
  // gridApi!: GridApi;
  // columnDefs: ColDef[] = [
  //   { 
  //     field: 'name',
  //     sortable: true,
  //     filter: true,
  //     headerName: 'Full Name'
  //   },
  //   { 
  //     field: 'age',
  //     sortable: true,
  //     filter: 'agNumberColumnFilter'
  //   },
  //   { 
  //     field: 'country',
  //     sortable: true,
  //     filter: true
  //   },
  //   { 
  //     field: 'email',
  //     sortable: true,
  //     filter: true
  //   },
  //   { 
  //     field: 'salary',
  //     sortable: true,
  //     filter: 'agNumberColumnFilter',
  //     valueFormatter: (params: any) => `$${params.value.toLocaleString()}`
  //   },
  //   { 
  //     field: 'department',
  //     sortable: true,
  //     filter: true
  //   },
  //   { 
  //     field: 'status',
  //     sortable: true,
  //     filter: true,
  //     cellRenderer: (params: any) => {
  //       return `<span class="badge ${params.value === 'Active' ? 'bg-success' : 'bg-danger'}">${params.value}</span>`;
  //     }
  //   },
  //   { 
  //     field: 'joinDate',
  //     sortable: true,
  //     filter: 'agDateColumnFilter',
  //     valueFormatter: (params: any) => new Date(params.value).toLocaleDateString()
  //   }
  // ];
  // onGridReady(event:any){
  //   this.gridApi = event.gridApi;
  // }

  
}
