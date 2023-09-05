import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task.model';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  angularFirestore: AngularFirestore = inject(AngularFirestore);

  getTasks(): Observable<Task[]> {
    return this.angularFirestore.collection<Task>("task").valueChanges();
  }

  addTask(task: Task): Promise<any> {
    return this.angularFirestore.collection<Task>("task").add(task);
  }
}
