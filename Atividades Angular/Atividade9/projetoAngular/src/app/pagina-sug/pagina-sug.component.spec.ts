import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSugComponent } from './pagina-sug.component';

describe('PaginaSugComponent', () => {
  let component: PaginaSugComponent;
  let fixture: ComponentFixture<PaginaSugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaSugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaSugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
