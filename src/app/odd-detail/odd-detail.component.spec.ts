import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddDetailComponent } from './odd-detail.component';

describe('OddDetailComponent', () => {
  let component: OddDetailComponent;
  let fixture: ComponentFixture<OddDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
