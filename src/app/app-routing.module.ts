import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsListComponent } from './goals-list/goals-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  { path: 'goals', component: GoalsListComponent },
  // { path: 'goals', component: GoalListComponent },
  // { path: 'goal/:id', component: GoalEditorComponent },
  // { path: 'tasks', component: TaskListComponent },
  // { path: 'task/:id', component: TaskEditorComponent },
  // { path: 'goal-detail/:id', component: GoalDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
