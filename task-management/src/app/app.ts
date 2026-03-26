import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskAdd } from './components/task-add/task-add';
import { TaskList } from "./components/task-list/task-list/task-list";

@Component({
  selector: 'app-root',
  imports: [TaskAdd, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-management');
}
