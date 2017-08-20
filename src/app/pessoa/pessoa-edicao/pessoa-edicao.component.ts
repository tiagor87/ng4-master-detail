import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng4-pessoa-edicao',
  templateUrl: './pessoa-edicao.component.html',
  styleUrls: ['./pessoa-edicao.component.scss']
})
export class PessoaEdicaoComponent implements OnInit {
  @Input() public pessoa;
  @Output() public gravada = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  gravar() {
    this.gravada.emit(this.pessoa);
  }
}
