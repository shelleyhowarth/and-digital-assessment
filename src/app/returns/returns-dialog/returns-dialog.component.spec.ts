import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsDialogComponent } from './returns-dialog.component';

describe('ReturnsDialogComponent', () => {
  let component: ReturnsDialogComponent;
  let fixture: ComponentFixture<ReturnsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
