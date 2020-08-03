import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css'],
})
export class PersonagemComponent implements OnInit {
  arcano;
  ilesoPontos: number;
  salvoPontos: number;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.arcano = JSON.parse(localStorage.getItem('personagem'));
    this.salvoPontos = parseInt(localStorage.getItem('salvoPontos'));
    this.ilesoPontos = parseInt(localStorage.getItem('ilesoPontos'));
  }

  deletarPersonagem(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: this.arcano.nome,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  formatLabel(value: number) {
    return value;
  }
}
