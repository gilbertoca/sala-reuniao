import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuniaoListaComponent } from './reuniao-lista.component';

describe('ReuniaoListaComponent', () => {
  let component: ReuniaoListaComponent;
  let fixture: ComponentFixture<ReuniaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuniaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuniaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
