import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/interfaces';
import { ApiLogin } from 'src/app/store/actions/actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  profileForm: FormGroup;
  inputRegister = [
    {
      label: 'User name',
      name: 'name',
      placeholder: 'Type your name.',
    },
  ];
  inputLogin = [
    {
      label: 'Email address',
      type: 'email',
      name: 'email',
      placeholder: 'Enter email',
      subText: 'We\'ll never share your email with anyone else.',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      autocomplete: true,
    },
  ];
  items;

  constructor(
    private store: Store<{ user: User }>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.route.snapshot.url[0].path === 'login') {
        this.items =  this.inputLogin;
    }
    else {
      this.items =  this.inputRegister.concat(this.inputLogin);
    }
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
    this.store.select('user').subscribe(res => {
      if (res.name) {
        this.router.navigate(['']);
      }
    });
  }

  onSubmit({ email, password }): void {
    this.store.dispatch(ApiLogin({ email, password }));
  }
}
