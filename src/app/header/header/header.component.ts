import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  change = 'text-dark';
  body ='bg-secondary';
  cambio = 'Arial';

  cambioColor() {
    if (this.change === 'text-dark') {
      this.change = 'text-white';
    } else {
      this.change = 'text-dark';
    }
  }

  cambioBg() {
    if (this.body === 'bg-secondary') {
      this.body = 'bg-info';
    } else {
      this.body = 'bg-secondary';
    }
  }

  cambioTipoLetra(){
    if (this.cambio === 'Arial') {
      this.cambio = 'cursive';
    } else {
      this.cambio = 'Arial';
    }
  }
}
