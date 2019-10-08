import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenDetailComponent } from './even-detail.component';

describe('EvenDetailComponent', () => {
  let component: EvenDetailComponent;
  let fixture: ComponentFixture<EvenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
