import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../model/goal.model';
import { Task } from '../model/task.model';
import { GoalService } from '../goal.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogData, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent {
  tasks$: Observable<Task[]> = this.taskService.getTasks();

  @Input() set tasks(value: Observable<Task[]>) {
    this.tasks$ = value;
  }
  @Output() edit = new EventEmitter<Task>();

  constructor(private dialog: MatDialog, private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        // this.tasks$.push(result.task);
      });
  }
  editTask(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });

  }
}
