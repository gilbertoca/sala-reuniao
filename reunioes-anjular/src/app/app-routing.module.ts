import { ReuniaoDetalheComponent } from './reuniao-detalhe/reuniao-detalhe.component';
import { AdicionaReuniaoComponent } from './adiciona-reuniao/adiciona-reuniao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReuniaoListaComponent } from './reuniao-lista/reuniao-lista.component';
import { AtualizaReuniaoComponent } from './atualiza-reuniao/atualiza-reuniao.component';

const routes: Routes = [
  { path: '', redirectTo: 'reunioes', pathMatch: 'full' },
  { path: 'reunioes', component: ReuniaoListaComponent },
  { path: 'adiciona', component: AdicionaReuniaoComponent },
  { path: 'atualiza/:id', component: AtualizaReuniaoComponent },
  { path: 'detalhe/:id', component: ReuniaoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
