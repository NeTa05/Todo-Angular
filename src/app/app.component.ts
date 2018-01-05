import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Task 1'),
      new Task('Task 2')
    ];
  }

  addTask(title: HTMLInputElement){
    if (!this.hasText(title.value)) {
      return false;
    }
    this.tasks.push(new Task(title.value));
    title.value = '';
    return false;
  }

  hasText(title: string): boolean {
    return !(title.trim() === '');
  }

}
