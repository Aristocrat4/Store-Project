import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchMobile = false;
  constructor(private route: Router) {}
  onLogin() {
    this.route.navigate(['auth']);
  }
  onLogo() {
    this.route.navigate(['']);
  }
  onSearchIcon() {
    this.searchMobile = !this.searchMobile;
  }
  onBasket() {
    this.route.navigate(['checkout']);
  }
}
