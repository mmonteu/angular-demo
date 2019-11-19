import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDemoComponent } from './compo-demo.component';

describe('CompoDemoComponent', () => {
  let component: CompoDemoComponent;
  let fixture: ComponentFixture<CompoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
