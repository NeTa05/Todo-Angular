import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Task } from '../task-todo/task.model';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  @Input() task: Task;
  @Output() notityDelete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.notityDelete.emit(this.task);
  }
}
