import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenButtonComponent } from './open-button.component';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CountriesComponent } from '../countries/countries.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OpenButtonComponent', () => {
  let component: OpenButtonComponent;
  let fixture: ComponentFixture<OpenButtonComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OpenButtonComponent,
        CountriesComponent,
        MatButtonModule,
        RouterModule.forRoot([
          {
            path:'countries',
            component: CountriesComponent
          }
        ])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenButtonComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to /countries when redirectToCountries is called', async ()=>{
    component.redirectToCountries();
    await fixture.whenStable();
    expect(location.path()).toBe('/countries');
  });

  it('should call redirectToCountries when click open countries button', ()=>{
    spyOn(component, 'redirectToCountries');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.open-btn');
    button.click();

    expect(component.redirectToCountries).toHaveBeenCalled();
  });

  it('should rendered the open countries button', ()=>{
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.open-btn');
    expect(button).toBeTruthy();
  });

  it('should displays "Open Countries" on the button', ()=>{
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.open-btn');
    expect(button.textContent.trim()).toBe("Open Countries");
  })
});
