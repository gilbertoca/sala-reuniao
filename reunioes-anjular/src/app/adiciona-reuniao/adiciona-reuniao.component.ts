import { ReuniaoService } from '../reuniao.service';
import { Reuniao } from '../reuniao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adiciona-reuniao',
  templateUrl: './adiciona-reuniao.component.html',
  styleUrls: ['./adiciona-reuniao.component.css']
})
export class AdicionaReuniaoComponent implements OnInit {

  Reuniao: Reuniao = new Reuniao();
  submitted = false;

  constructor(private ReuniaoService: ReuniaoService,
    private router: Router) { }

  ngOnInit() {
  }

  newReuniao(): void {
    this.submitted = false;
    this.Reuniao = new Reuniao();
  }

  save() {
    this.ReuniaoService.createReuniao(this.Reuniao)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Reuniao = new Reuniao();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/reunioes']);
  }
}
