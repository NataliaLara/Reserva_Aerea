import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAereaEditComponent } from './passagemaerea-edit.component';

describe('PassagemAereaEditComponent', () => {
  let component: PassagemAereaEditComponent;
  let fixture: ComponentFixture<PassagemAereaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemAereaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
