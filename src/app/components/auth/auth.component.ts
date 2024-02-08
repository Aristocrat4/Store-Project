import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastname = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  hide: boolean = true;
  showSignUp: boolean = false;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSignIn() {
    this.showSignUp = !this.showSignUp;
  }
  onSignUp() {
    this.showSignUp = !this.showSignUp;
  }
}
