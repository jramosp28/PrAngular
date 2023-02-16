import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  change = 'text-dark';
  body ='bg-info';
  
  cambioColor() { 
    if (this.change === 'text-dark') {  
      this.change = 'text-danger';  
    } else {  
      this.change = 'text-dark';  
    }  
  } 
  cambioBg() { 
    if (this.body === 'bg-info') {  
      this.body = 'bg-success';  
    } else {  
      this.body = 'bg-info';  
    }  
  } 
}
