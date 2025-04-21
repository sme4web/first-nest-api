import { AppService } from './app.service';
import { user } from "./fakeData";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUserByName(name: string): user | undefined;
    getUserById(id: string): user | undefined;
    signIn(email: string, password: string): string;
    signUp(imported_user: user): user | string;
}
