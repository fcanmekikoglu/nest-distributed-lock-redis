import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TASKS } from './constants';
import { LockService } from 'src/lock/lock.service';

@Injectable()
export class TasksService {
  constructor(private readonly lockService: LockService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async doTask() {
    console.log('doTask started working.');

    for (const task of TASKS) {
      const { id, name, ttl } = task;
      const lock = await this.lockService.acquireLock(name, ttl);

      if (lock) {
        console.log(`${id} : ${name} is locked`);
      }
    }
  }
}
