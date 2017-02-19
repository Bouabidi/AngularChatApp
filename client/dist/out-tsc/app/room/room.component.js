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
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';
var RoomComponent = (function () {
    function RoomComponent(router, route, chatService) {
        this.router = router;
        this.route = route;
        this.chatService = chatService;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getRoomMessages(this.roomId).subscribe(function (lst) {
            _this.messages = lst;
        });
        this.chatService.getConnectedUserList(this.roomId, this.op).subscribe(function (lst) {
            _this.users = lst;
        });
        this.roomId = this.route.snapshot.params['id'];
    };
    RoomComponent.prototype.onSendMessage = function () {
        if (this.newMessage.length < 1) {
            return;
        }
        ;
        this.chatService.sendMessage(this.roomId, this.newMessage).subscribe(function (succeeded) {
        });
    };
    RoomComponent.prototype.onLeaveRoom = function () {
        this.chatService.leaveRoom(this.roomId).subscribe(function (succeeded) { });
        this.router.navigate(['/rooms']);
    };
    return RoomComponent;
}());
RoomComponent = __decorate([
    Component({
        selector: 'app-room',
        templateUrl: './room.component.html',
        styleUrls: ['./room.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ChatService])
], RoomComponent);
export { RoomComponent };
//# sourceMappingURL=../../../../src/app/room/room.component.js.map