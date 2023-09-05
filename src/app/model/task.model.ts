export interface Task {
    id?: number;
    title?: string;
    description?: string;
    barrier?: string;
    solution?: string;
    priority?: number;
    dueDate?: Date;
    completed?: boolean;
    goalId?: number; // Associate task with a goal
}
