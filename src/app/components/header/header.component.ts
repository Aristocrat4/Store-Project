import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCartFeature } from '../../state/cart/cart.selectors';
import { Observable } from 'rxjs';
import { CartItem } from '../../state/cart/cart.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchMobile = false;
  cart$: Observable<CartItem[]> = this.store.select(selectCartFeature);
  constructor(private route: Router, private store: Store) {}
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
