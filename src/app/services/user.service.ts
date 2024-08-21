import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCredentials } from '../models/user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiRoutes } from '../models/ApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl;
  private user: BehaviorSubject<IUser | null>;
  
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
   }
   getUser(): Observable<IUser | null> {
    return this.user.asObservable();
  }

  getUserValue(): IUser | null {
    return this.user.value;
  }

  sigIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl+ ApiRoutes.User.signIn,credentials).pipe(map((user: IUser) => {
      this.user.next(user);
      return user;
    }));
  }

  signOut() {
    this.user.next(null);
    
  }
}
