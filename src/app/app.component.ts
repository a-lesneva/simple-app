import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-app';
  counter = 0;

  increment = () => this.counter++;
    
  decrement = () => this.counter--;

  reset = () => {
    if (this.counter !== 0){
      return this.counter = 0
    }
     else {
      throw "The counter is already 0!";
    }
  }

}
