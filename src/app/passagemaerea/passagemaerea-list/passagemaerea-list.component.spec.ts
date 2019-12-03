import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAereaListComponent } from './passagemaerea-list.component';

describe('PassagemAereaComponent', () => {
  let component: PassagemAereaListComponent;
  let fixture: ComponentFixture<PassagemAereaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemAereaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
