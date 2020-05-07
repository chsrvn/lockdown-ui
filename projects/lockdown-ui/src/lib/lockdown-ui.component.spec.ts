import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockdownUiComponent } from './lockdown-ui.component';

describe('LockdownUiComponent', () => {
  let component: LockdownUiComponent;
  let fixture: ComponentFixture<LockdownUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockdownUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockdownUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
