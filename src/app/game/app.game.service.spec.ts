import { TestBed } from '@angular/core/testing';
import { AppGameService } from './app.game.service';

describe('BattleService', () => {
  let service: AppGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
