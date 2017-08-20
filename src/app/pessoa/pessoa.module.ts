import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaEdicaoComponent } from './pessoa-edicao/pessoa-edicao.component';
import { PessoaHomeComponent } from './pessoa-home/pessoa-home.component';

@NgModule({
  imports: [CommonModule, PessoaRoutingModule, FormsModule],
  declarations: [PessoaComponent, PessoaEdicaoComponent, PessoaHomeComponent],
  exports: [PessoaComponent]
})
export class PessoaModule {}
