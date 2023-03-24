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
import { LoginComponent } from 'src/app/components/login/login.component';
import { IMechanicComponent } from 'src/app/components/i-mechanic/i-mechanic.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  providers: [
    ApiService
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    IMechanicComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
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
