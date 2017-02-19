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
  message: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.params['id'];
  }

  onSendMessage() {
    this.chatService.sendMessage(this.roomId, this.message).subscribe(succeeded => {
    })
  }


}
