import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';

// angular material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from 'src/app/service/api.service';



@NgModule({
  providers: [
    ApiService
  ],
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  exports: [
  ]
})
export class SharedComponentsModule { }
