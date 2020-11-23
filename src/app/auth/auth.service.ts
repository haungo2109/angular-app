import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Config from '../config';
import { User } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<number>;
  isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient) {}

  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Observable<HttpResponse<any>> {
    return this.http.post<User>(
      Config.getUrl('/dangnhap'),
      {
        Email: email,
        MatKhau: password,
      },
      { observe: 'response' }
    );
  }

  register(email: string, password: string, name?: string): void {
    // this.http.post(Config.getBaseUrl(), { name, email, password }));
  }
}
