import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NivelComponent } from './nivel/nivel.component';
import { MagiaCombativaComponent } from './magia-combativa/magia-combativa.component';
import { MovimentosComponent } from './movimentos/movimentos.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardPersonService } from './auth-guard-person.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'nivel',
    component: NivelComponent,
  },
  { path: 'magia-combativa', component: MagiaCombativaComponent },
  { path: 'movimentos', component: MovimentosComponent },
  { path: 'equipamentos', component: EquipamentosComponent },
  {
    path: 'personagem',
    component: PersonagemComponent,
    canActivate: [AuthGuardPersonService],
  },
];
