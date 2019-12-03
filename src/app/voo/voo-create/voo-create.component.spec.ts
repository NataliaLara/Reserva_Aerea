import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VooCreateComponent } from './voo-create.component';

describe('VooCreateComponent', () => {
  let component: VooCreateComponent;
  let fixture: ComponentFixture<VooCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VooCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VooCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
