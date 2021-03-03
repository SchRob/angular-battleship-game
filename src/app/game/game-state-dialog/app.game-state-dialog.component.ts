import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ALPHABETH } from '../types/app.constants';
import { IAppCoordinate } from '../interfaces/app.coordinate.interface';
import { IAppGameState } from '../interfaces/app.game-state.interface';

@Component({
  selector: 'app-game-state-dialog',
  templateUrl: './app.game-state-dialog.component.html'
})
export class AppGameStateDialogComponent implements OnInit {
    alphabeticHeader: string[] = ALPHABETH;

    constructor(@Inject(MAT_DIALOG_DATA) public data: {coord: IAppCoordinate, state: IAppGameState}) {}

    ngOnInit(): void {
    }

}
