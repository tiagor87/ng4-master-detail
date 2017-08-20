import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng4-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  public pessoa;
  public indice;
  public pessoas = [
    { NmPessoa: 'Pessoa 1' },
    { NmPessoa: 'Pessoa 2' },
    { NmPessoa: 'Pessoa 3' },
    { NmPessoa: 'Pessoa 4' },
    { NmPessoa: 'Pessoa 5' }
  ];
  constructor() {}

  ngOnInit() {}

  selecionar(pessoa, indice) {
    this.pessoa = Object.assign({}, pessoa);
    this.indice = indice;
  }

  gravar(pessoa) {
    this.pessoas.splice(this.indice, 1, pessoa);
  }
}
