import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  socket: any;

  constructor() {
    this.socket = io('http://localhost:8080/');
    this.socket.on('connect', function(){
  });
}

  login(userName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.socket.emit('adduser', userName, succeeded => {
        observer.next(succeeded);
      });
    });

    return observable;
  }

  setCurrentUser(username: string) {
    this.socket.username = username;
  }

  joinRoom(roomName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      const param = {
        room: roomName
      };
      this.socket.emit('joinroom', param, function(a: boolean) {
          observer.next(a);
      });
    });

    return observable;
  }

  banUser(user): Observable<boolean> {
    const observable = new Observable(observer => {
      this.socket.emit('ban', user, function(a: boolean) {
          observer.next(a);
      });
    });
    return observable;
  }

  kickUser(user): Observable<boolean> {
    const observable = new Observable(observer => {
      this.socket.emit('kick', user, function(a: boolean) {
          observer.next(a);
      });
    });
    return observable;
  }

  leaveRoom(roomName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      this.socket.emit('partroom', roomName, function(a: boolean) {
        observer.next(a);
      });
    });

    return observable;
  }

  getRoomList(): Observable<string[]> {
    const obs = new Observable(observer => {
      this.socket.emit('rooms');
      this.socket.on('roomlist', (lst) => {
        const strArr: string[] = [];
        for (const x in lst) {
          if (x !== undefined) {
            strArr.push(x);
          }
        }
        observer.next(strArr);
      });
    });
    return obs;
  }

  getPrivateMessages(): Observable<string[]> {
    const obs = new Observable(observer => {
        this.socket.on('recv_privatemsg', (sender, message) => {
          const array = [];
          const msgObj = {sender: sender, message: message};
          array.push(msgObj);
          observer.next(array);
      });
    });
    return obs;
  }

  getRoomMessages(): Observable<string[]> {
    const obs = new Observable(observer => {
      this.socket.on('updatechat', (roomName, messages) => {
        observer.next(messages);
      });
    });
    return obs;
  }

  getUserList(): Observable<string[]> {
    const obs = new Observable(observer => {
      this.socket.emit('users');
      this.socket.on('userlist', (lst) => {
        observer.next(lst);
      });
    });
    return obs;
  }

  getConnectedUserList(): Observable<string[]> {
    const obs = new Observable(observer => {
      this.socket.on('updateusers', (roomName, users, op) => {
        const strArr: string[] = [];
        for (const x in users) {
          if (x !== undefined) {
            strArr.push(x);
          }
        }
        observer.next(strArr);
      });
    });
    return obs;
  }

  addRoom(roomName: string): Observable<boolean> {
    const observable = new Observable(observer => {
      // TODO validate that the room name is validate
      const param = {
        room: roomName
      };
      this.socket.emit('joinroom', param, function(a: boolean) {
          observer.next(a);
      });
    });

    return observable;
  }

sendMessage(room: string, messsage: string): Observable<boolean> {
  const obs = new Observable(observer => {
    const param = {
      roomName: room,
      msg: messsage
    };
    this.socket.emit('sendmsg', param, function(a: boolean) {
      observer.next(a);
    });
  });

  return obs;

}

sendPrivateMessage(otherChatUser: string, message: string): Observable<boolean> {
  const obs = new Observable(observer => {
    const param = {
      nick: otherChatUser,
      message: message
    };
    this.socket.emit('privatemsg', param , function(a: boolean) {
      observer.next(a);
    });
  });

  return obs;
}


}
