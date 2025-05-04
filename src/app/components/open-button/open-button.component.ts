import { Component, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-button',
  imports: [MatButtonModule],
  templateUrl: './open-button.component.html',
  styleUrl: './open-button.component.css'
})
export class OpenButtonComponent {
  constructor(private router: Router){}
  names: WritableSignal<string[]> = signal(['David', 'Nivetha', 'Kanmani', 'Robert', 'Perumal']);
  redirectToCountries(){
    this.router.navigate(['/countries']);
  }

  changeName(){
    // this.names[4] = 'Rukmani';
    this.names.set(['David', 'Nivetha', 'Kanmani', 'Rukmani', 'Perumal'])
  }
}
