import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor() {

  }

  signInWithEmailAndPassword(email, password): void {
    
  }
}
