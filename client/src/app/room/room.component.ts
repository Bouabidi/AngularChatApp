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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getRoomMessages(this.roomId).subscribe(lst => {
      this.messages = lst;
    });
    this.chatService.getConnectedUserList(this.roomId, this.op).subscribe(lst => {
      this.users = lst;
    });
    this.roomId = this.route.snapshot.params['id'];
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


}
