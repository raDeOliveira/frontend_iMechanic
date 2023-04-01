import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared.components/shared.components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule
  ],
  exports: [
  ]
})
export class HomeModule { }
