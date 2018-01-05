import { 
  Component,
  OnInit, 
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

import { Task } from './task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() notityDelete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.notityDelete.emit(this.task);
  }

  markTaskDone() {
    this.task.markDone();
    //this.task.markNotDone();
  }
}
