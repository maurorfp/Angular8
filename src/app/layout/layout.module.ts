import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ShelfsComponent } from './shelfs/shelfs.component';


@NgModule({
  declarations: [LayoutComponent, MainComponent, ProductsComponent, ShelfsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
