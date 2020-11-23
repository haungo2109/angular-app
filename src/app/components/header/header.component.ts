import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/interfaces';
import { LogoutSuccess } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private store: Store<{ user: User }>) {}

  items = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Fan page',
      link: '',
    },
  ];

  ngOnInit(): void {
    this.store.select('user').subscribe((res) => {
      this.user = res;
    });
  }

  Logout(): void{
    this.store.dispatch(LogoutSuccess());
  }
}
