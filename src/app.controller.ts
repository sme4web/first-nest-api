import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { user } from "./fakeData";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("get-user-by-name/:name")
  getUserByName(@Param("name") name: string) {
    return this.appService.getUserByName(name);
  }

  @Get("get-user-by-id/:id")
  getUserById(@Param("id") id: string) {
    return this.appService.getUserById(id);
  }

  @Get("sign-in/:email/:password")
  signIn(@Param("email") email: string, @Param("password") password: string) {
    return this.appService.signIn(email, password)
  }

  @Post("/sign-up")
  signUp(@Body() imported_user: user): user | string {
    if (!imported_user.name || !imported_user.email || !imported_user.password) return "There is a missed data.";
    return this.appService.signUp(imported_user);
  }
}
