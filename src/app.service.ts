import { Injectable } from '@nestjs/common';
import { data, user } from "./fakeData";

@Injectable()
export class AppService {
  getUserByName(name: string): user | undefined {
    return data.find((user) => user["name"] === name);
  }

  getUserById(id: string): user | undefined {
    return data.find((user) => user["id"] === +id);
  }

  signIn(email: string, password: string): string {
    const user = data.find((user) => user["email"] === email);
    return user ? (user["password"] === password ? "Signed In Succesfully!" : "Invalid Password") : "User Is Not Found!";
  }

  signUp(newUser: user): user {
    const userId = data[data.length - 1].id + 1;

    console.log(newUser);

    const newUserData : user = {
      id: userId,
      name: newUser.name ?? "",
      email: newUser.email ?? "",
      password: newUser.password ?? "",
    };

    data.push(newUserData);
    return newUserData;
  }
}
