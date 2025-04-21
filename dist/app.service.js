"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fakeData_1 = require("./fakeData");
let AppService = class AppService {
    getUserByName(name) {
        return fakeData_1.data.find((user) => user["name"] === name);
    }
    getUserById(id) {
        return fakeData_1.data.find((user) => user["id"] === +id);
    }
    signIn(email, password) {
        const user = fakeData_1.data.find((user) => user["email"] === email);
        return user ? (user["password"] === password ? "Signed In Succesfully!" : "Invalid Password") : "User Is Not Found!";
    }
    signUp(newUser) {
        const userId = fakeData_1.data[fakeData_1.data.length - 1].id + 1;
        console.log(newUser);
        const newUserData = {
            id: userId,
            name: newUser.name ?? "",
            email: newUser.email ?? "",
            password: newUser.password ?? "",
        };
        fakeData_1.data.push(newUserData);
        return newUserData;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map