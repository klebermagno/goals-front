import { Component } from '@angular/core';
import { Task } from './model/task.model';
import { Goal } from './model/goal.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goals-app';
  constructor(public authService: AuthService) { }
}
