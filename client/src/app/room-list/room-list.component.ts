import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {



  rooms: string[];
  newRoomName: string;
  users: string[];
  roomPassword: string;
  privateMessages: string[];

  constructor(private chatService: ChatService,
    private router: Router) { }

  ngOnInit() {
    this.chatService.getRoomList().subscribe(lst => {
      this.rooms = lst;
    });
    this.chatService.getUserList().subscribe(lst => {
      this.users = lst;
    });
    this.chatService.getPrivateMessages().subscribe(lst => {
      this.privateMessages = lst;
    });
  }

  onNewRoom() {
    if (this.newRoomName.length < 1) {
      return;
    }

    this.chatService.addRoom(this.newRoomName).subscribe(succeeded => {
      if (succeeded === true) {
        this.chatService.joinRoom(this.newRoomName).subscribe(joiinSucceeded => {
          if (joiinSucceeded === true) {
            this.router.navigate(['rooms', this.newRoomName]);
          }
        });
      }
    });

  }
  onJoinRoom(roomName) {
    if (roomName.length < 1) {
      return;
    }

    this.chatService.joinRoom(roomName).subscribe(succeeded => {
      if (succeeded === true) {
        this.router.navigate(['rooms', roomName]);
      }
    });

  }

  onUserClicked(userClicked) {
    this.router.navigate(['private', userClicked]);
  }

}
