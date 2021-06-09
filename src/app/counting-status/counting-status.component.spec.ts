import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingStatusComponent } from './counting-status.component';

describe('CountingStatusComponent', () => {
  let component: CountingStatusComponent;
  let fixture: ComponentFixture<CountingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
