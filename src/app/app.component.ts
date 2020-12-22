import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-practise';
  public name = 'babu';
  public sliderValue = 15;

  public triggerRange() {
    this.sliderValue = 15;
  }
}
