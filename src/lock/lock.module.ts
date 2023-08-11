import { Module } from '@nestjs/common';
import { LockService } from './lock.service';
import { LockController } from './lock.controller';

@Module({
  controllers: [LockController],
  providers: [LockService],
  exports: [LockService],
})
export class LockModule {}
