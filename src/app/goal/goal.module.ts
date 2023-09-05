import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsListComponent } from '../goals-list/goals-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule here
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule here


@NgModule({
  declarations: [
    GoalsListComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class GoalModule {

}
