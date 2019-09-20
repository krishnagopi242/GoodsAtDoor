import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { layoutRoutes } from './layout.routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from '@layout/product-add/product-add.component';
import { ProductGetComponent } from '@layout/product-get/product-get.component';
import { ProductEditComponent } from '@layout/product-edit/product-edit.component';

@NgModule({
  declarations: [ProductAddComponent, ProductGetComponent, ProductEditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(layoutRoutes)]
})
export class LayoutModule {}
