import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TASKS } from './constants';
import { LockService } from 'src/lock/lock.service';

@Injectable()
export class TasksService {
  constructor(private readonly lockService: LockService) { }


  @Cron(CronExpression.EVERY_30_SECONDS)
  async doTask() {
    console.log('doTask started working at: ', Date.now());

    for (const task of TASKS) {
      const { id, name, wait } = task;
      const lock = await this.lockService.acquireLock(name, wait);

      if (lock) {
        console.log(`${id} : ${name} is locked and it will take ~${Math.round(wait / 1000)} second`);
      }
    }
  }
}
