import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NivelComponent } from './nivel/nivel.component';
import { MagiaCombativaComponent } from './magia-combativa/magia-combativa.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nivel',
    component: NivelComponent,
  },
  { path: 'magia-combativa', component: MagiaCombativaComponent },
];
