import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreNgModule } from '../store/store.module';

const route = [
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    StoreNgModule,
    RouterModule.forChild(route),
  ],
  providers: [AuthService],
})
export class AuthModule {}
