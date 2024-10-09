import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPageRoutingModule } from './pagina-routing.module';

import { PaginaPage } from './pagina.page';
import { CompComponent } from "../comp/comp.component";
import { SwiperComponent } from '../swiper/swiper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPageRoutingModule,
    CompComponent,
    SwiperComponent
],
  declarations: [PaginaPage]
})
export class PaginaPageModule {}
