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
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';
import { ButtonIconRoundComponent } from 'src/app/components/button-icon-round/button-icon-round.component';

@NgModule({
  providers: [ApiService],
  declarations: [
    HomeComponent,
    LoginComponent,
    IMechanicComponent,
    NavBarComponent,
    ButtonsComponent,
    ButtonIconRoundComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [],
})
export class SharedComponentsModule { }
