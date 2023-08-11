import { UUID, randomInt, randomUUID } from 'crypto';

export class Task {
  readonly id: UUID = randomUUID();
  readonly ttl: number = randomInt(15000, 55000)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export const TASKS: Task[] = [];

export function createRandomTasks(num: number = 10) {
  for (let i = 0; i < num; i++) {
    const taskName = `Task ${i + 1}`;
    const newTask = new Task(taskName);
    TASKS.push(newTask);
  }
}

createRandomTasks();
