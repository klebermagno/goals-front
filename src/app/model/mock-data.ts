// mock-data.ts

import { Goal } from './goal.model';
import { Task } from './task.model';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Task 1 for Goal 1',
    description: 'Some description about this task.',
    barrier: 'Some barrier',
    solution: 'Potential solution',
    priority: 1,
    dueDate: new Date('2023-09-01'),
    completed: false,
    goalId: 1
  },
  {
    id: 2,
    title: 'Task 2 for Goal 2',
    description: 'Another description.',
    barrier: 'Another barrier',
    solution: 'Another solution',
    priority: 2,
    dueDate: new Date('2023-09-10'),
    completed: true,
    goalId: 2
  },
  {
    id: 3,
    title: 'Task 3 for Goal 3',
    description: 'Another description.',
    barrier: 'Another barrier',
    solution: 'Another solution',
    priority: 2,
    dueDate: new Date('2023-09-10'),
    completed: true,
    goalId: 3
  }
];

export const GOALS: Goal[] = [
  {
    id: 1,
    title: 'Goal 1',
    description: 'Description for Goal 1',
    dueDate: new Date('2023-10-01'),
    tasks: TASKS.filter(task => task.goalId === 1),
    barrier: 'Some barrier for goal',
    solution: 'Some solution for goal'
  },
  {
    id: 2,
    title: 'Goal 2',
    description: 'Description for Goal 2',
    dueDate: new Date('2023-10-01'),
    tasks: TASKS.filter(task => task.goalId === 2),
    barrier: 'Some barrier for goal',
    solution: 'Some solution for goal'
  },
  {
    id: 3,
    title: 'Goal 3',
    description: 'Description for Goal 3',
    dueDate: new Date('2023-10-01'),
    tasks: TASKS.filter(task => task.goalId === 3),
    barrier: 'Some barrier for goal',
    solution: 'Some solution for goal'
  }
];

