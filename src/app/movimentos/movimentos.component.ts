import {
  TREINAMENTO_MAGICO_AVANCADO,
  REPUTACAO_MAGICA,
  VESTUARIO_ENCANTADO,
} from '../data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PODERIA_SER_PIOR,
  ADIVINHACAO_FORENSE,
  VA_COM_TUDO_OU_VA_PRA_CASA,
  NAO_E_MINHA_CULPA,
  PRATICANTE,
  ESCUDO_MAGICO,
  TERCEIRO_OLHO,
} from '../data';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.css'],
})
export class MovimentosComponent implements OnInit {
  totalPoints = 3;
  treinoMagicoAvancado: boolean = false;
  reputacaoMagica: boolean = false;
  vestuarioEncantado: boolean = false;
  poderiaSerPior: boolean = false;
  adivinhaForense: boolean = false;
  comTudoPraCasa: boolean = false;
  minhaCulpa: boolean = false;
  praticante: boolean = false;
  escudoMagico: boolean = false;
  terceiroOlho: boolean = false;

  constructor(private router: Router) {
    let pontosExtras = JSON.parse(localStorage.getItem('pontosExtras'));
    console.log(pontosExtras.movArcanoPontos);
    this.totalPoints += pontosExtras.movArcanoPontos;
  }

  ngOnInit(): void {}

  othersOptions(param) {
    if (param == true) {
      this.totalPoints -= 1;
    } else if (param == false) {
      this.totalPoints += 1;
    }
    console.log(param);
  }

  equipamentos() {
    let arcano = JSON.parse(localStorage.getItem('personagem'));
    arcano.movimentos = [];
    if (this.treinoMagicoAvancado) {
      arcano.movimentos.push(TREINAMENTO_MAGICO_AVANCADO);
    }
    if (this.reputacaoMagica) {
      arcano.movimentos.push(REPUTACAO_MAGICA);
    }
    if (this.vestuarioEncantado) {
      arcano.movimentos.push(VESTUARIO_ENCANTADO);
    }
    if (this.poderiaSerPior) {
      arcano.movimentos.push(PODERIA_SER_PIOR);
    }
    if (this.adivinhaForense) {
      arcano.movimentos.push(ADIVINHACAO_FORENSE);
    }
    if (this.comTudoPraCasa) {
      arcano.movimentos.push(VA_COM_TUDO_OU_VA_PRA_CASA);
    }
    if (this.minhaCulpa) {
      arcano.movimentos.push(NAO_E_MINHA_CULPA);
    }
    if (this.praticante) {
      arcano.movimentos.push(PRATICANTE);
    }
    if (this.escudoMagico) {
      arcano.movimentos.push(ESCUDO_MAGICO);
    }
    if (this.terceiroOlho) {
      arcano.movimentos.push(TERCEIRO_OLHO);
    }
    localStorage.setItem('personagem', JSON.stringify(arcano));
    this.router.navigate(['/equipamentos']);
  }
}
