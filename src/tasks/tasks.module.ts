import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { LockModule } from 'src/lock/lock.module';

@Module({
  imports: [LockModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
