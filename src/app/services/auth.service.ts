import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, pword: string){
    if (email === 'habeebrahmanca22@gmail.com' && pword === 'habi'){
      return 200
    } else {
      return 403
    }
  }
}
