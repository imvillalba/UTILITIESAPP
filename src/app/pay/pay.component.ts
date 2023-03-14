import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalBankComponent } from '../components/modal-bank/modal-bank.component';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  colorControl = new FormControl('primary' as ThemePalette);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

pagar(){
  this.dialog.open(ModalBankComponent, {
    width: '535px',
    height: '359px',
    data: 'SERÁS DIRIGIDO A TU BANCO',
  });
}

}
