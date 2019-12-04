import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVooComponent } from './reserva-voo.component';

describe('ReservaVooComponent', () => {
  let component: ReservaVooComponent;
  let fixture: ComponentFixture<ReservaVooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
