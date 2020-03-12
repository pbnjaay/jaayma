import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import { ModalController } from '@ionic/angular';
import { ModalCategoryPage } from './modal-category/modal-category.page';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  fake: Array<any> = new Array(20);
  products: Product[];
  routerOutlet: any;
  constructor(private productService: ProductService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.productService.getAll().subscribe((p: Product[]) => this.products = p );
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalCategoryPage,
      swipeToClose: true,
      cssClass: 'modal'
    });

    await modal.present();
  }
}