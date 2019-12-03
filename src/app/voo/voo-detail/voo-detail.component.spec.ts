import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VooDetailComponent } from './voo-detail.component';

describe('VooDetailComponent', () => {
  let component: VooDetailComponent;
  let fixture: ComponentFixture<VooDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VooDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VooDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
