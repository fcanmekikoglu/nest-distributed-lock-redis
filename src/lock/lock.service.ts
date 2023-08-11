import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LockService {
  constructor(private readonly redisService: RedisService) {}

  async acquireLock(lockName: string, ttl: number): Promise<boolean> {
    const client = this.redisService.getClient();

    const result = await client.set(lockName, 'LOCKED', 'PX', ttl, 'NX');
    return result === 'OK';
  }
}
