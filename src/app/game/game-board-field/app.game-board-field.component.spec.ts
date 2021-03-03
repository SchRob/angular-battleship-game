import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppGameBoardFieldComponent } from './app.game-board-field.component';

describe('AppGameBoardFieldComponent', () => {
  let component: AppGameBoardFieldComponent;
  let fixture: ComponentFixture<AppGameBoardFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGameBoardFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameBoardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
