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
    arcano.armaReserva = '';
    switch (this.value) {
      case '1':
        arcano.armaReserva =
          'Revólver velhor [2-dano perto, recarga barulhenta]';
        break;
      case '2':
        arcano.armaReserva = 'Faca ritualística [1-dano contato]';
        break;
      case '3':
        arcano.armaReserva = 'Espada herdada [2-dano contato brutal]';
    }
    localStorage.setItem('personagem', JSON.stringify(arcano));
    this.router.navigate(['/personagem']);
  }
}
