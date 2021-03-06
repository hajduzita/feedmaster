import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  private userReg(data: any): User {
    return data;
  }

  logoutUser(): Promise<void> {
    return this.httpService.post('/logout', {});
  }

  loginUser(data: User): Promise<void> {
    return this.httpService.postFormData('/login', data);
  }
  
  getUserFromToken(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.httpService.get('/verify-registration/' + token)
        .then(response => {
          resolve((response as any).userData);
        }).catch(reject);
    });
  }

  registerUser(user: User) : Promise<void> {
    let postData = {
      emailAddress : user.email,
      originalUsername : user.name,
      newUsername : user.name2,
      password: user.password,
      confirmPassword: user.password2,
    };
    return this.httpService.post('/verify-registration', postData);
  }

}
