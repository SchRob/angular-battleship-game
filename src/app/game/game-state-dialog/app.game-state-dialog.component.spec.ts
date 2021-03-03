import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGameStateDialogComponent } from './app.game-state-dialog.component';

describe('AppGameStateDialogComponent', () => {
  let component: AppGameStateDialogComponent;
  let fixture: ComponentFixture<AppGameStateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGameStateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
