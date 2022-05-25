import { ReuniaoDetalheComponent } from 'src/app/reuniao-detalhe/reuniao-detalhe.component';
import { Observable } from "rxjs";
import { ReuniaoService } from "../reuniao.service";
import { Reuniao } from "../reuniao";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-reuniao-list",
  templateUrl: "./reuniao-lista.component.html",
  styleUrls: ["./reuniao-lista.component.css"]
})
export class ReuniaoListaComponent implements OnInit {
  Reunioes: Observable<Reuniao[]>;

  constructor(private ReuniaoService: ReuniaoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.Reunioes = this.ReuniaoService.getReunioesList();
  }

  deleteReuniao(id: number) {
    this.ReuniaoService.deleteReuniao(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  ReuniaoDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateReuniao(id: number){
    this.router.navigate(['update', id]);
  }
}
