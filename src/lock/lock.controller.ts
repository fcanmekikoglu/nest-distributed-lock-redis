import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LockService } from './lock.service';

@Controller('lock')
export class LockController {
  constructor(private readonly lockService: LockService) {}
}
