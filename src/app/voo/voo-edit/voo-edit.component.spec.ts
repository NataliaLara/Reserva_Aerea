import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VooEditComponent } from './voo-edit.component';

describe('VooEditComponent', () => {
  let component: VooEditComponent;
  let fixture: ComponentFixture<VooEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VooEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VooEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
