import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticDatabindingComponent } from './pratic-databinding.component';

describe('PraticDatabindingComponent', () => {
  let component: PraticDatabindingComponent;
  let fixture: ComponentFixture<PraticDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
