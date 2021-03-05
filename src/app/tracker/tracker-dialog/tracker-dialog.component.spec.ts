import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDialogComponent } from './tracker-dialog.component';

describe('TrackerDialogComponent', () => {
  let component: TrackerDialogComponent;
  let fixture: ComponentFixture<TrackerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
