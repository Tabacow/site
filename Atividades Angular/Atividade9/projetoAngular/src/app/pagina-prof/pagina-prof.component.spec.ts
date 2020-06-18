import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProfComponent } from './pagina-prof.component';

describe('PaginaProfComponent', () => {
  let component: PaginaProfComponent;
  let fixture: ComponentFixture<PaginaProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
