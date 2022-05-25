import { Component, OnInit } from '@angular/core';
import { Reuniao } from '../reuniao';
import { ActivatedRoute, Router } from '@angular/router';
import { ReuniaoService } from '../reuniao.service';

@Component({
  selector: 'app-atualiza-reuniao',
  templateUrl: './atualiza-reuniao.component.html',
  styleUrls: ['./atualiza-reuniao.component.css']
})
export class AtualizaReuniaoComponent implements OnInit {

  id: number;
  Reuniao: Reuniao;
  submitted = false;


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

  updateReuniao() {
    this.ReuniaoService.updateReuniao(this.id, this.Reuniao)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Reuniao = new Reuniao();
    this.gotoList();
  }

  onSubmit() {
    this.updateReuniao();    
  }

  gotoList() {
    this.router.navigate(['/reunioes']);
  }
}
