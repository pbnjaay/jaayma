import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { ModalCategoryPage } from './modal-category/modal-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
  ],
  declarations: [PrincipalPage,ModalCategoryPage],
  entryComponents: [ModalCategoryPage]
})
export class PrincipalPageModule {}
