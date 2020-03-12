import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.page.html',
  styleUrls: ['./modal-category.page.scss'],
})
export class ModalCategoryPage implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAll().subscribe(p => this.products = p);
  }

}
