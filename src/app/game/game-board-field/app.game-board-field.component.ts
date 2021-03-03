import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppGameService } from '../app.game.service';
import { IAppCoordinate } from '../interfaces/app.coordinate.interface';

@Component({
  selector: 'app-game-board-field',
  templateUrl: './app.game-board-field.component.html'
})
export class AppGameBoardFieldComponent implements IAppCoordinate, OnInit, OnChanges {
    @Input() x: number;
    @Input() y: number;
    @Input() title: string;
    @Input() color: string;
    @Input() isHit?: boolean;
    @Input() hideShip: boolean;
    @Input() isShipPart?: boolean;
    @Input() enemy: 'player' | 'opponent';

    private me: 'player' | 'opponent';

    constructor(private readonly appGameService: AppGameService) { }

    ngOnInit(): void {
        this.me = this.enemy === 'player' && 'opponent' || 'player';
        this.setTitle(this.title || '&nbsp;');
        this.setColor();
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.setTitle(this.isHit && 'X');
        this.setColor();
    }

    onClick(): void {
        if (this.me === 'player') {
            // player can't shoot himself ;-)
            return;
        }

        this.isHit = true;
        this.setTitle(this.isHit && 'X');
        this.setColor();
        this.appGameService.setHit(this.me, { x: this.x, y: this.y });
        this.appGameService.fireAt(this.enemy);
    }

    private setColor(): void {
        this.color = 'basic';
        if (this.isShipPart && !this.isHit) {
            this.color = this.hideShip && 'basic' || 'accent';
        } else if (this.isShipPart && this.isHit) {
            this.color = 'warn';
        }
    }

    private setTitle(title: string): void {
        this.title = title;
    }
}
