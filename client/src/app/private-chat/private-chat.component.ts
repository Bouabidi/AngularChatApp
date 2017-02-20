import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {


  newMessage: string;
  otherChatUser: string;
  sendingMessage

  constructor(private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService) { }

  ngOnInit() {
    this.otherChatUser = this.route.snapshot.params['id'];
  }

  onSendPrivateMessage() {
    if (this.newMessage.length < 1) {
      return;
    };
    this.chatService.sendPrivateMessage(this.otherChatUser, this.newMessage).subscribe(succeeded => {
      if (succeeded === true) {
        this.router.navigate(['rooms']);
      }
    });
  }

  onGoBack() {
      this.router.navigate(['/rooms']);
  }

}
