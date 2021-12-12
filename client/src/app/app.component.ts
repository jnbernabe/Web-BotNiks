import { Component } from '@angular/core';
import { ToastComponent } from './partials/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Web-Botniks-Project';
  public counter: number = 0;
}
