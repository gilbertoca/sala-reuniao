import { Reuniao } from '../reuniao';
import { Component, OnInit, Input } from '@angular/core';
import { ReuniaoService } from '../reuniao.service';
import { ReuniaoListaComponent } from '../reuniao-lista/reuniao-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reuniao-detalhe',
  templateUrl: './reuniao-detalhe.component.html',
  styleUrls: ['./reuniao-detalhe.component.css']
})
export class ReuniaoDetalheComponent implements OnInit {

  id: number;
  Reuniao: Reuniao;

  constructor(private route: ActivatedRoute,private router: Router,
    private ReuniaoService: ReuniaoService) { }

  ngOnInit() {
    this.Reuniao = new Reuniao();

    this.id = this.route.snapshot.params['id'];
    
    this.ReuniaoService.getReuniao(this.id)
      .subscribe(data => {
        console.log(data)
        this.Reuniao = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['Reunioes']);
  }
}
