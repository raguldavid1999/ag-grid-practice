import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from '../../services/api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CountriesComponent,
        AgGridAngular
      ],
      providers:[
        provideHttpClient(withFetch())
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    apiService = TestBed.inject(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should columnDefs has 2 column with proper naming', ()=>{
    expect(component.columnDefs.length).toBe(2);
    expect(component.columnDefs[0].field).toBe('name');
    expect(component.columnDefs[0].headerName).toBe('Country Name');
    expect(component.columnDefs[1].field).toBe('population')
    expect(component.columnDefs[1].headerName).toBe('Population')
  });

  it('should ag-grid rendered in template', ()=>{
    const agGridElement = fixture.nativeElement.querySelector('ag-grid-angular');
    expect(agGridElement).toBeTruthy();
  })

});
