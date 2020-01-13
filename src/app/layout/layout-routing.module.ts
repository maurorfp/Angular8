import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ShelfsComponent } from './shelfs/shelfs.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MainComponent
      },
      {
        path :"products",
        component: ProductsComponent
      },
      {
        path: "shelfs",
        component:  ShelfsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
