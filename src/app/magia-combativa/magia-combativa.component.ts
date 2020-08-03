import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magia-combativa',
  templateUrl: './magia-combativa.component.html',
  styleUrls: ['./magia-combativa.component.css'],
})
export class MagiaCombativaComponent implements OnInit {
  totalPoints = 3;
  explosao: boolean = false;
  bola: boolean = false;
  missil: boolean = false;
  muralha: boolean = false;
  fogo: boolean = false;
  forca: boolean = false;
  raioOuEntropia: boolean = false;
  frioOuGelo;
  terra: boolean = false;
  neocromantica: boolean = false;
  habilitaEfeitos: boolean = false;

  constructor(private router: Router) {
    let pontosExtras = JSON.parse(localStorage.getItem('pontosExtras'));
    console.log(pontosExtras.magiaCombativaPontos);
    this.totalPoints += pontosExtras.magiaCombativaPontos;
  }

  ngOnInit(): void {}

  othersOptions(param) {
    if (this.explosao || this.bola || this.missil || this.muralha) {
      this.habilitaEfeitos = true;
    } else {
      this.habilitaEfeitos = false;
    }
    if (param == true) {
      this.totalPoints -= 1;
    } else if (param == false) {
      this.totalPoints += 1;
    }
    console.log(param);
  }

  movimentos() {
    let arcano = JSON.parse(localStorage.getItem('personagem'));
    arcano.magiaCombativa = [];
    if (this.explosao) {
      arcano.magiaCombativa.push(
        'Explosão [2-dano perto mágica chamativa barulhenta]'
      );
    }
    if (this.bola) {
      arcano.magiaCombativa.push(
        'Bola [1-dano perto área mágica chamativa barulhenta]'
      );
    }
    if (this.missil) {
      arcano.magiaCombativa.push(
        'Míssil [1-dano longe mágica chamativa barulhenta]'
      );
    }
    if (this.muralha) {
      arcano.magiaCombativa.push(
        'Muralha   [1-dano   perto   barreira   1-armadura   mágicachamativa barulhenta]'
      );
    }
    if (this.fogo) {
      arcano.magiaCombativa.push(
        'Fogo: Adicione +2 de dano e [fogo] para uma base. Com10+ em  uma rolagem de magia combativa, o fogo  nãovia se espalhar.'
      );
    }
    if (this.forca) {
      arcano.magiaCombativa.push(
        'Força ou Vento: Adicione +1 de dano e [empurrão] parauma base; ou +1 de armadura para uma muralha.'
      );
    }
    if (this.raioOuEntropia) {
      arcano.magiaCombativa.push(
        'Raio ou Entropia: Adicione +1 de dano e  [brutal] parauma base.'
      );
    }
    if (this.frioOuGelo) {
      arcano.magiaCombativa.push(
        'Frio   ou   Gelo:   Adicione   −1   de   dano   e   +2   de   armadurapara uma muralha; ou +1 de dano e [restritiva] para outras bases.'
      );
    }
    if (this.terra) {
      arcano.magiaCombativa.push(
        'Terra: Adicione [empurrão restritiva] para uma base.'
      );
    }
    if (this.neocromantica) {
      arcano.magiaCombativa.push(
        'Necromântica: Adicione [drena-vida] para uma base.'
      );
    }

    localStorage.setItem('personagem', JSON.stringify(arcano));
    this.router.navigate(['/movimentos']);
  }
}
