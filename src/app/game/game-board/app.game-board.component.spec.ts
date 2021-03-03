import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGameBoardComponent } from './app.game-board.component';

describe('AppGameBoardComponent', () => {
  let component: AppGameBoardComponent;
  let fixture: ComponentFixture<AppGameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGameBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
