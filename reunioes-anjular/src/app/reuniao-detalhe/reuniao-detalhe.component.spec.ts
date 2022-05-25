import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuniaoDetalheComponent } from './reuniao-detalhe.component';

describe('ReuniaoDetalheComponent', () => {
  let component: ReuniaoDetalheComponent;
  let fixture: ComponentFixture<ReuniaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuniaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuniaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
