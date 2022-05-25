import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaReuniaoComponent } from './adiciona-reuniao.component';

describe('AdicionaReuniaoComponent', () => {
  let component: AdicionaReuniaoComponent;
  let fixture: ComponentFixture<AdicionaReuniaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaReuniaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
