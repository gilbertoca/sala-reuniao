import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionaReuniaoComponent } from './adiciona-reuniao/adiciona-reuniao.component';
import { ReuniaoDetalheComponent } from './reuniao-detalhe/reuniao-detalhe.component';
import { ReuniaoListaComponent } from './reuniao-lista/reuniao-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizaReuniaoComponent } from './atualiza-reuniao/atualiza-reuniao.component';
@NgModule({
  declarations: [
    AppComponent,
    AdicionaReuniaoComponent,
    AtualizaReuniaoComponent,
    ReuniaoDetalheComponent,
    ReuniaoListaComponent,
    ReuniaoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
