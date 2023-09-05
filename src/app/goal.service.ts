import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from './model/goal.model';
import { AngularFirestore } from "@angular/fire/compat/firestore";


interface Item {
  name: string,
  description: string,
};

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  // goal1$: Observable<Goal[]>;
  // item1$: Observable<Item[]>;


  // firestore: Firestore = inject(Firestore);
  angularFirestore: AngularFirestore = inject(AngularFirestore);

  getGoals(): Observable<Goal[]> {
    return this.angularFirestore.collection<Goal>("goal").valueChanges();
  }



  addGoal(goal: Goal): Promise<any> {
    return this.angularFirestore.collection<Goal>("goal").add(goal);
  }


}
