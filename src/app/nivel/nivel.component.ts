import { Component, OnInit } from '@angular/core';
import { ArcanoModel } from '../models/arcano.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css'],
})
export class NivelComponent implements OnInit {
  panelOpenState: boolean = true;
  showPoints: boolean = false;
  showMelhoriaAvancada: boolean = false;
  totalPoints: number = 0;
  pontosAvancados: number = 0;
  level: number;
  arcano;

  // outras opções
  movArcano1: boolean = false;
  movArcano2: boolean = false;
  movCartilha1: boolean = false;
  movCartilha2: boolean = false;
  magiaCombativa: boolean = false;

  // Opções melhorias avançadas
  op1: boolean = false;
  op2: boolean = false;
  op3: boolean = false;
  op4: boolean = false;
  op5: boolean = false;
  op6: boolean = false;
  op7: boolean = false;
  op8: boolean = false;
  op9: boolean = false;

  constructor(private router: Router) {
    this.arcano = JSON.parse(localStorage.getItem('personagem'));
  }

  formatLabel(value: number) {
    localStorage.setItem('totalPoints', JSON.stringify(value));
    return value;
  }

  nextStep() {
    this.showPoints = true;
    this.level = parseInt(localStorage.getItem('totalPoints'));
    this.totalPoints = parseInt(localStorage.getItem('totalPoints'));
    localStorage.setItem('pontosMelhoriaAvancada', '0');
    if (this.totalPoints >= 5 && this.totalPoints < 10) {
      localStorage.setItem('pontosMelhoriaAvancada', '1');
    } else if (this.totalPoints >= 10 && this.totalPoints < 15) {
      localStorage.setItem('pontosMelhoriaAvancada', '2');
    } else if (this.totalPoints >= 15 && this.totalPoints < 20) {
      localStorage.setItem('pontosMelhoriaAvancada', '3');
    } else if (this.totalPoints == 20) {
      localStorage.setItem('pontosMelhoriaAvancada', '4');
    }
    this.pontosAvancados = parseInt(
      localStorage.getItem('pontosMelhoriaAvancada')
    );
  }

  nextStepMelhorias() {
    this.validaOpcesEscolhidas();
    this.showMelhoriaAvancada = true;
    console.log('Arcano melhoria', this.arcano);
    this.arcano.level = this.level;
    localStorage.setItem('personagem', JSON.stringify(this.arcano));
  }

  nextStepMagia() {
    this.validaOpcesEscolhidas();
    console.log('Arcano OK', this.arcano);
    localStorage.setItem('personagem', JSON.stringify(this.arcano));
    this.router.navigate(['/magia-combativa']);
  }

  validaOpcesEscolhidas() {
    let movArcanoPontos = 0;
    let movCartilhaPontos = 0;
    let magiaCombativaPontos = 0;

    if (this.movArcano1) {
      movArcanoPontos += 1;
    }
    if (this.movArcano2) {
      movArcanoPontos += 1;
    }
    if (this.movCartilha1) {
      movCartilhaPontos += 1;
    }
    if (this.movCartilha2) {
      movCartilhaPontos += 1;
    }
    if (this.magiaCombativa) {
      magiaCombativaPontos += 1;
    }

    let pontosExtras = {
      movArcanoPontos: movArcanoPontos,
      movCartilhaPontos: movCartilhaPontos,
      magiaCombativaPontos: magiaCombativaPontos,
    };

    localStorage.setItem('pontosExtras', JSON.stringify(pontosExtras));
  }

  diminuiValor(param) {
    if (!this.compare(param, 'diminui')) return;

    this.totalPoints += 1;
    switch (param) {
      case 'braveza':
        this.arcano.braveza -= 1;
        break;
      case 'esperteza':
        this.arcano.esperteza -= 1;
        break;
      case 'estranheza':
        this.arcano.estranheza -= 1;
        break;
      case 'firmeza':
        this.arcano.firmeza -= 1;
        break;
      case 'sutileza':
        this.arcano.sutileza -= 1;
        break;
    }
  }

  aumentaValor(param) {
    if (!this.compare(param)) return;

    if (this.totalPoints > 0) {
      this.totalPoints -= 1;
      switch (param) {
        case 'braveza':
          this.arcano.braveza += 1;
          break;
        case 'esperteza':
          this.arcano.esperteza += 1;
          break;
        case 'estranheza':
          this.arcano.estranheza += 1;
          break;
        case 'firmeza':
          this.arcano.firmeza += 1;
          break;
        case 'sutileza':
          this.arcano.sutileza += 1;
          break;
      }
    } else {
      console.log('Seus pontos acabaram');
    }
  }

  compare(value, opcao?) {
    let comparador = JSON.parse(localStorage.getItem('personagem'));

    if (opcao == 'diminui') {
      switch (value) {
        case 'braveza':
          if (
            this.arcano.braveza == comparador.braveza ||
            this.arcano.braveza + 3 == comparador.braveza
          ) {
            return false;
          }
          break;
        case 'esperteza':
          if (this.arcano.esperteza == comparador.esperteza) {
            return false;
          }
          break;
        case 'estranheza':
          if (this.arcano.estranheza == comparador.estranheza) {
            return false;
          }
          break;
        case 'firmeza':
          if (this.arcano.firmeza == comparador.firmeza) {
            return false;
          }
          break;
        case 'sutileza':
          if (this.arcano.sutileza == comparador.sutileza) {
            return false;
          }
          break;
      }
    } else {
      switch (value) {
        case 'braveza':
          if (this.arcano.braveza == comparador.braveza + 2) {
            return false;
          }
          break;
        case 'esperteza':
          if (this.arcano.esperteza == comparador.esperteza + 2) {
            return false;
          }
          break;
        case 'estranheza':
          if (this.arcano.estranheza == comparador.estranheza + 3) {
            return false;
          }
          break;
        case 'firmeza':
          if (this.arcano.firmeza == comparador.firmeza + 2) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  othersOptions(param) {
    if (param == true) {
      this.totalPoints -= 1;
    } else if (param == false) {
      this.totalPoints += 1;
    }
  }

  melhoriasAvancadas(param) {
    if (param == true) {
      this.pontosAvancados -= 1;
    } else if (param == false) {
      this.pontosAvancados += 1;
    }
  }

  // COnfigurações Melhorias avançadas ************************************

  diminuiValorMelhorias(param) {
    if (!this.compareMelhorias(param, 'diminui')) return;

    this.pontosAvancados += 1;
    switch (param) {
      case 'braveza':
        this.arcano.braveza -= 1;
        break;
      case 'esperteza':
        this.arcano.esperteza -= 1;
        break;
      case 'estranheza':
        this.arcano.estranheza -= 1;
        break;
      case 'firmeza':
        this.arcano.firmeza -= 1;
        break;
      case 'sutileza':
        this.arcano.sutileza -= 1;
        break;
    }
  }

  aumentaValorMelhorias(param) {
    if (!this.compareMelhorias(param)) return;

    if (this.pontosAvancados > 0) {
      this.pontosAvancados -= 1;
      switch (param) {
        case 'braveza':
          this.arcano.braveza += 1;
          break;
        case 'esperteza':
          this.arcano.esperteza += 1;
          break;
        case 'estranheza':
          this.arcano.estranheza += 1;
          break;
        case 'firmeza':
          this.arcano.firmeza += 1;
          break;
        case 'sutileza':
          this.arcano.sutileza += 1;
          break;
      }
    } else {
      console.log('Seus pontos acabaram');
    }
  }

  compareMelhorias(value, opcao?) {
    let comparador = JSON.parse(localStorage.getItem('personagem'));

    if (opcao == 'diminui') {
      switch (value) {
        case 'braveza':
          if (
            this.arcano.braveza == comparador.braveza ||
            this.arcano.braveza + 3 == comparador.braveza
          ) {
            return false;
          }
          break;
        case 'esperteza':
          if (this.arcano.esperteza == comparador.esperteza) {
            return false;
          }
          break;
        case 'estranheza':
          if (this.arcano.estranheza == comparador.estranheza) {
            return false;
          }
          break;
        case 'firmeza':
          if (this.arcano.firmeza == comparador.firmeza) {
            return false;
          }
          break;
        case 'sutileza':
          if (this.arcano.sutileza == comparador.sutileza) {
            return false;
          }
          break;
      }
    } else if (this.op1 == true) {
      let pontosSalvos = parseInt(
        localStorage.getItem('pontosMelhoriaAvancada')
      );
      console.log(pontosSalvos);
      if (this.pontosAvancados == 1 && pontosSalvos == 4) {
        return false;
      }
    }
    return true;
  }

  // *********************************************************************

  melhoriasAvancadasClassificacao(param) {}

  ngOnInit(): void {}
}
