import { Component, OnInit } from '@angular/core';
import { genero, olhos, roupas } from '../data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArcanoModel } from '../models/arcano.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arcano: ArcanoModel = {
    nome: ' ',
    genero: '',
    roupa: '',
    olhos: '',
    braveza: 0,
    esperteza: 0,
    estranheza: 0,
    firmeza: 0,
    sutileza: 0,
  };
  generos = genero;
  olhos = olhos;
  roupas = roupas;
  value: any;
  showValue = false;
  createCharacter = true;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  adicionaValores() {
    console.log(JSON.stringify(this.value));
    this.showValue = true;
    switch (this.value) {
      case '1':
        console.log('Teste');
        this.arcano.braveza = 0;
        this.arcano.esperteza = 1;
        this.arcano.estranheza = 2;
        this.arcano.firmeza = 1;
        this.arcano.sutileza = -1;
        break;
      case '2':
        this.arcano.braveza = 1;
        this.arcano.esperteza = 1;
        this.arcano.estranheza = 2;
        this.arcano.firmeza = 1;
        this.arcano.sutileza = 0;
        break;
      case '3':
        this.arcano.braveza = -1;
        this.arcano.esperteza = 2;
        this.arcano.estranheza = 2;
        this.arcano.firmeza = 0;
        this.arcano.sutileza = -1;
        break;
      case '4':
        this.arcano.braveza = -1;
        this.arcano.esperteza = 1;
        this.arcano.estranheza = 2;
        this.arcano.firmeza = 0;
        this.arcano.sutileza = -1;
        break;
      case '5':
        this.arcano.braveza = 0;
        this.arcano.esperteza = 1;
        this.arcano.estranheza = 2;
        this.arcano.firmeza = 0;
        this.arcano.sutileza = 0;
        break;
      default:
        console.log('Erro inesperado');
    }
    console.log(this.arcano);
  }

  salvarPersonagem() {
    this.createCharacter = false;
    localStorage.setItem('personagem', JSON.stringify(this.arcano));
  }
  levelStep() {}
}
