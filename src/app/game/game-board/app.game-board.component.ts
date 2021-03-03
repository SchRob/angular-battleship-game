import { Component, Input, OnInit } from '@angular/core';
import { IAppCoordinate } from '../interfaces/app.coordinate.interface';
import { ALPHABETH } from '../types/app.constants';

@Component({
    selector: 'app-game-board',
    templateUrl: './app.game-board.component.html'
})
export class AppGameBoardComponent implements OnInit {
    @Input() coordinates: Array<IAppCoordinate> = [];
    @Input() hideShips: boolean;
    @Input() enemy: 'player' | 'opponent';

    alphabeticHeader: string[] = ALPHABETH;

    constructor() {
    }

    ngOnInit(): void {
    }

}
