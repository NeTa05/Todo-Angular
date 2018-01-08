import { 
  Component,
  OnInit, 
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

import { Task } from './task.model';
@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() notityDelete: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() notityTaskDone = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  onDelete() {
    this.notityDelete.emit(this.task);
  }

  markTaskDone() {
    this.task.markDone();
    this.notityTaskDone.emit();
  }
}
