import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { LockModule } from './lock/lock.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        // password: 'authpassword',
      },
    }),
    ScheduleModule.forRoot(),
    TasksModule,
    LockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
