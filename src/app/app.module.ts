import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { ROUTES } from './app.routes';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { NivelComponent } from './nivel/nivel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MagiaCombativaComponent } from './magia-combativa/magia-combativa.component';
import { MovimentosComponent } from './movimentos/movimentos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { PersonagemComponent } from './personagem/personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NivelComponent,
    MagiaCombativaComponent,
    MovimentosComponent,
    EquipamentosComponent,
    PersonagemComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
