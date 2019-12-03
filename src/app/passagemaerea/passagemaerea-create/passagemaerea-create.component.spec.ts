import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAereaCreateComponent } from './passagemaerea-create.component';

describe('PassagemAereaCreateComponent', () => {
  let component: PassagemAereaCreateComponent;
  let fixture: ComponentFixture<PassagemAereaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemAereaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
