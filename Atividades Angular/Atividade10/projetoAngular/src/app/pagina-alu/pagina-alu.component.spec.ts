import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAluComponent } from './pagina-alu.component';

describe('PaginaAluComponent', () => {
  let component: PaginaAluComponent;
  let fixture: ComponentFixture<PaginaAluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
