import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  loginFailed: boolean = false;

  constructor(private chatService: ChatService,
    private router: Router) {

  }


  ngOnInit() {
  }

  onLogin() {
    console.log('Login called in component');
    this.chatService.login(this.userName).subscribe(succeded => {
      console.log('Success!!!');
      this.loginFailed = !succeded;
      if (succeded === true) {
        // TODO Redirect to Roomlist
        this.router.navigate(['/rooms']);
      }
    });

  }



}
