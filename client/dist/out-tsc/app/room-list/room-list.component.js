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
var RoomListComponent = (function () {
    function RoomListComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
    }
    RoomListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getRoomList().subscribe(function (lst) {
            _this.rooms = lst;
        });
        this.chatService.getUserList().subscribe(function (lst) {
            _this.users = lst;
        });
    };
    RoomListComponent.prototype.onNewRoom = function () {
        var _this = this;
        if (this.newRoomName.length < 1) {
            return;
        }
        this.chatService.addRoom(this.newRoomName).subscribe(function (succeeded) {
            if (succeeded === true) {
                _this.router.navigate(['rooms', _this.newRoomName]);
            }
        });
    };
    RoomListComponent.prototype.onJoinRoom = function (roomName) {
        var _this = this;
        if (roomName.length < 1) {
            return;
        }
        this.chatService.joinRoom(roomName).subscribe(function (succeeded) {
            if (succeeded === true) {
                _this.router.navigate(['rooms', roomName]);
            }
        });
    };
    return RoomListComponent;
}());
RoomListComponent = __decorate([
    Component({
        selector: 'app-room-list',
        templateUrl: './room-list.component.html',
        styleUrls: ['./room-list.component.css']
    }),
    __metadata("design:paramtypes", [ChatService,
        Router])
], RoomListComponent);
export { RoomListComponent };
//# sourceMappingURL=../../../../src/app/room-list/room-list.component.js.map