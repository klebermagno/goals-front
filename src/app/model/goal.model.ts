import { Task } from './task.model';

export interface Goal {
    id: number;
    title: string;
    description?: string;
    dueDate?: Date;
    tasks?: Task[]; // List of tasks associated with this goal
    barrier?: string;
    solution?: string;
}
