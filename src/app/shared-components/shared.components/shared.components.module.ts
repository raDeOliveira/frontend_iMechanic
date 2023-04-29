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
import { CarComponent } from 'src/app/components/car/car.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';
import { ButtonIconRoundComponent } from 'src/app/components/button-icon-round/button-icon-round.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ProgressSpinnerComponent } from 'src/app/components/progress-spinner/progress-spinner.component';
import { BikeComponent } from 'src/app/components/bike/bike.component';

@NgModule({
  providers: [ApiService],
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    CarComponent,
    ButtonsComponent,
    ButtonIconRoundComponent,
    QuestionsComponent,
    CardComponent,
    ProgressSpinnerComponent,
    BikeComponent,

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
    MatCheckboxModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    CarComponent,
    ButtonsComponent,
    ButtonIconRoundComponent,
    QuestionsComponent,
    CardComponent,
    ProgressSpinnerComponent,
    BikeComponent,
  ],
})
export class SharedComponentsModule { }
