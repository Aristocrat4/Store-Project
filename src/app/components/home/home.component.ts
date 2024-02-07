import { Component } from '@angular/core';
import { CarouselComponent } from '../../ui/carousel/carousel.component';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
products = Array(16)
}
