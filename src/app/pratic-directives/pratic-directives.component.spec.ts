import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticDirectivesComponent } from './pratic-directives.component';

describe('PraticDirectivesComponent', () => {
  let component: PraticDirectivesComponent;
  let fixture: ComponentFixture<PraticDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
