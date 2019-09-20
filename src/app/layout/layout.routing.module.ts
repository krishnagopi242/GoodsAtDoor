// {
//   path: 'product/create',
//   component: ProductAddComponent
// },
// {
//   path: 'edit/:id',
//   component: ProductEditComponent
// },
// {
//   path: 'products',
//   component: ProductGetComponent
// },

import { Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'productsList',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'productsList',
    component: ProductGetComponent
  }
];
