import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicComponent} from './public.component';
import {PublicRoutingModule} from './public-routing.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    AuthModule
  ],
  declarations: [PublicComponent],
  exports: []
})
export class PublicModule {
}
