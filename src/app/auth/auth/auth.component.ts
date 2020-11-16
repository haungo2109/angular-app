import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit({ email, password }): void {
    this.auth.signInWithEmailAndPassword(email, password);
  }
}
