import { Routes } from '@angular/router';
import { OpenButtonComponent } from './components/open-button/open-button.component';
import { CountriesComponent } from './components/countries/countries.component';

export const routes: Routes = [
    {
        path:'',
        component: OpenButtonComponent
    },
    {
        path:'countries',
        component: CountriesComponent
    }
];
