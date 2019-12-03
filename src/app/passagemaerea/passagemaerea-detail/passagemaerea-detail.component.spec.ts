import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAereaDetailComponent } from './passagemaerea-detail.component';

describe('PassagemAereaDetailComponent', () => {
  let component: PassagemAereaDetailComponent;
  let fixture: ComponentFixture<PassagemAereaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemAereaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
