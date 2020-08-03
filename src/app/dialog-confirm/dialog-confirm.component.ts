import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css'],
})
export class DialogConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  excluir() {
    localStorage.removeItem('personagem');
    localStorage.removeItem('pontosExtras');
    localStorage.removeItem('pontosMelhoriaAvancada');
    localStorage.removeItem('totalPoints');
    this.router.navigate(['/']);
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
