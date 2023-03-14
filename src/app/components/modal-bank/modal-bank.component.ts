import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSuccessComponent } from '../modal-success/modal-success.component';

@Component({
  selector: 'app-modal-bank',
  templateUrl: './modal-bank.component.html',
  styleUrls: ['./modal-bank.component.scss']
})
export class ModalBankComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  irBanco(){
    this.dialog.open(ModalSuccessComponent, {
      width: '535px',
      height: '359px',
    });
  }

}
