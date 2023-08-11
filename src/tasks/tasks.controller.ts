import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
}
