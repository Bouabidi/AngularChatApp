import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomId: string;
  newMessage: string;
  messages: string[];
  users: string[];
  op: string;
  userToKick: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getRoomMessages().subscribe(lst => {
      this.messages = lst;
    });
    this.chatService.getConnectedUserList().subscribe(lst => {
      this.users = lst;
    });
    this.roomId = this.route.snapshot.params['id'];
    this.userToKick = '';
  }

  onSendMessage() {
    if (this.newMessage.length < 1) {
      return;
    };

    this.chatService.sendMessage(this.roomId, this.newMessage).subscribe(succeeded => {
    });
  }

  onLeaveRoom() {
    this.chatService.leaveRoom(this.roomId).subscribe(succeeded => {});
    this.router.navigate(['/rooms']);
  }

  onKickUser() {
    this.chatService.kickUser({user: this.userToKick, room: this.roomId})
        .subscribe(suceeded => {});
  }

  onBanUser() {
    this.chatService.banUser({user: this.userToKick, room: this.roomId})
        .subscribe(suceeded => {});
  }

}
