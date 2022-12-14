// import { Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    // res.status(HttpStatus.OK).json({ message: 'helo gandu.....' });
    return this.appService.getHello();
  }
}
