import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private chatService: ChatService,
    private router: Router) { }

  rooms: string[];
  newRoomName: string;
  users: string[];
  roomPassword: string;

  ngOnInit() {
    this.chatService.getRoomList().subscribe(lst => {
      this.rooms = lst;
    });
    this.chatService.getUserList().subscribe(lst => {
      this.users = lst;
    })
  }

  onNewRoom() {
    if (this.newRoomName.length < 1) {
      return;
    }

    this.chatService.addRoom(this.newRoomName).subscribe(succeeded => {
      if (succeeded === true) {
        this.chatService.joinRoom(this.newRoomName).subscribe(succeeded => {
          if (succeeded === true) {
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

  onGetPrivateMessage() {
    this.router.navigate(['private']);
  }

}
