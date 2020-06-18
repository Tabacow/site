import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIniComponent } from './pagina-ini.component';

describe('PaginaIniComponent', () => {
  let component: PaginaIniComponent;
  let fixture: ComponentFixture<PaginaIniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaIniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
