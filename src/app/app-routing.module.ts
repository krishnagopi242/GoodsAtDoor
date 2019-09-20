import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from '@layout/product-add/product-add.component';
import { ProductEditComponent } from '@layout/product-edit/product-edit.component';
import { ProductGetComponent } from '@layout/product-get/product-get.component';

const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
