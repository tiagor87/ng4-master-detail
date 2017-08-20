import { PessoaEdicaoComponent } from './pessoa-edicao/pessoa-edicao.component';
import { PessoaHomeComponent } from './pessoa-home/pessoa-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PessoaHomeComponent
  },
  {
    path: ':id',
    component: PessoaEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule {}
