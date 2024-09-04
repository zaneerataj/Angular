import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`{{title}}`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    title :string = "Welcome to my World"
    name : any = 'zaneera'
}
