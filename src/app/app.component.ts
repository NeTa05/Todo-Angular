import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[];
  tasksDone: number = 0;
  tasksNotDone: number = 0;

  constructor() {
    this.tasks = [
      new Task('Task 1'),
      new Task('Task 2', true)
    ];
    this.getTasksNotDone();
  }

  addTask(title: HTMLInputElement){
    if (this.hasText(title.value)) {
      this.tasks.push(new Task(title.value));
    }
    title.value = '';
    this.getTasksNotDone();
    return false;
  }

  // check if add to list
  hasText(title: string): boolean {
    return !(title.trim() === '');
  }

  onDelete(task:Task): void {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.getTasksNotDone();
  }

  markAllDone() {
    this.tasks.forEach(task => { task.markDone() });
    this.getTasksNotDone();
  }

  getTasksNotDone() {
    this.tasksDone = 0;
    this.tasks.forEach(task => { 
      if (!task.done) {
        this.tasksDone ++;
      }
    });
  }

}
