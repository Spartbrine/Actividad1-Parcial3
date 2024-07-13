import { Component } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-maq-cuatro',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[ShopService],
  templateUrl: './maq-cuatro.component.html',
  styleUrl: './maq-cuatro.component.scss'
})
export class MaqCuatroComponent {
  products: any[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
