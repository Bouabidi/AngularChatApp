var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from "rxjs/Observable";
var ChatService = (function () {
    function ChatService() {
        this.socket = io("http://localhost:8080/");
        this.socket.on("connect", function () {
            console.log("connect");
        });
    }
    ChatService.prototype.login = function (userName) {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.emit("adduser", userName, function (succeeded) {
                console.log("Reply received");
                observer.next(succeeded);
            });
        });
        return observable;
    };
    ChatService.prototype.getRoomList = function () {
        var _this = this;
        var obs = new Observable(function (observer) {
            _this.socket.emit("rooms");
            _this.socket.on("roomlist", function (lst) {
                var strArr = [];
                for (var x in lst) {
                    strArr.push(x);
                }
                observer.next(strArr);
            });
        });
        return obs;
    };
    ChatService.prototype.addRoom = function (roomName) {
        var _this = this;
        var observable = new Observable(function (observer) {
            var param = {
                room: roomName
            };
            _this.socket.emit("joinroom", param, function (a) {
                observer.next(a);
            });
        });
        return observable;
    };
    return ChatService;
}());
ChatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ChatService);
export { ChatService };
//# sourceMappingURL=../../../src/app/chat.service.js.map