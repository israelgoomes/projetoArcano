import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css'],
})
export class EquipamentosComponent implements OnInit {
  value: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  salvar() {
    let arcano = JSON.parse(localStorage.getItem('personagem'));
    arcano.armaReserva = { arma: '', img: '' };
    switch (this.value) {
      case '1':
        arcano.armaReserva.arma =
          'Revólver velhor [2-dano perto, recarga barulhenta]';
        arcano.armaReserva.img = '../../assets/img/revolver_velho.png';
        break;
      case '2':
        arcano.armaReserva.arma = 'Faca ritualística [1-dano contato]';
        arcano.armaReserva.img = '../../assets/img/faca_rtualistica.jpg';
        break;
      case '3':
        arcano.armaReserva.arma = 'Espada herdada [2-dano contato brutal]';
        arcano.armaReserva.img = '../../assets/img/espada_herdada.png';
    }
    console.log(arcano);
    localStorage.setItem('personagem', JSON.stringify(arcano));
    this.router.navigate(['/personagem']);
  }
}
