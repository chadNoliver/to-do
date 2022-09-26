import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../lib/task';
@Component({
  selector: 'tr[app-task-row]',
  templateUrl: './task-row.component.html',
})

export class TaskRowComponent implements OnInit {
@Input() task:Task;
  constructor() {}
  ngOnInit(): void {
  }
}
