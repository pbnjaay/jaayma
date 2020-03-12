import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  id: string;
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private toastCtrl: ToastController) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
    this.productService.getProduct(this.id).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  async onClick() {
    const toast = await this.toastCtrl.create({
      message: 'Added to cart successfully',
      duration: 2000,
      cssClass: 'toast'
    });

    await toast.present();
  }
}
