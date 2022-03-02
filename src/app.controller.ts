import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * A basic controller with single route.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
