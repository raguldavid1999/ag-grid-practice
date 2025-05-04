import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AllCommunityModule, ColDef, GridApi, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { map } from 'rxjs';
ModuleRegistry.registerModules([AllCommunityModule]);

interface Country{
  name: string,
  poulation: number
}

@Component({
  selector: 'app-countries',
  imports: [AgGridAngular],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getCountryData().pipe(
      map((response:any) => response.map((country:any) => ({
        name: country.name.common,
        population: country.population
      })))
    ).subscribe({
      next:(response:Country[])=>{
        this.rowData = response
      }
    })
  }
  rowData:Country[] = [];
  gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { 
      field: 'name',
      sortable: true,
      filter: true,
      headerName: 'Country Name'
    },
    { 
      field: 'population',
      sortable: true,
      filter: true,
      headerName: 'Population'
    }
  ];
  onGridReady(event:any){
    this.gridApi = event.gridApi;
  }
}
