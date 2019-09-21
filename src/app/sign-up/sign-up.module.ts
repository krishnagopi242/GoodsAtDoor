import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { signUpRoutes } from './sign-up.routing.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(signUpRoutes)]
})
export class SignUpModule {}
