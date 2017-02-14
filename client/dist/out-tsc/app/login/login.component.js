var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
var LoginComponent = (function () {
    function LoginComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log('Login called in component');
        this.chatService.login(this.userName).subscribe(function (succeded) {
            console.log('Success!!!');
            _this.loginFailed = !succeded;
            if (succeded === true) {
                _this.router.navigate(['/rooms']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [ChatService,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../src/app/login/login.component.js.map