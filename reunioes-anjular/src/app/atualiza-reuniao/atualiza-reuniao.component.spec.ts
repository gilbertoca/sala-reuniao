import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaReuniaoComponent } from './atualiza-reuniao.component';

describe('AtualizaReuniaoComponent', () => {
  let component: AtualizaReuniaoComponent;
  let fixture: ComponentFixture<AtualizaReuniaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaReuniaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
