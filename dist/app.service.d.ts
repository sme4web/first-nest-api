import { user } from "./fakeData";
export declare class AppService {
    getUserByName(name: string): user | undefined;
    getUserById(id: string): user | undefined;
    signIn(email: string, password: string): string;
    signUp(newUser: user): user;
}
