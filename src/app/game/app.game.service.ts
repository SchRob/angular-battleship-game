import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAppCoordinate } from './interfaces/app.coordinate.interface';
import { IAppGameBoard } from './interfaces/app.game-board.interface';
import { IAppGameState } from './interfaces/app.game-state.interface';

@Injectable({
    providedIn: 'root'
})
export class AppGameService {
    private maxLength: number = 10;
    private playerBoard: IAppGameBoard = {
        id: 'player',
        title: 'Player',
        cols: 2,
        rows: 1,
        hideShips: false,
        coordinates: [],
        action: {
            title: 'New Game',
            fn: () => this.initGame()
        }
    };

    private opponentBoard: IAppGameBoard = {
        id: 'opponent',
        title: 'Opponent',
        cols: 2,
        rows: 1,
        hideShips: true,
        coordinates: [],
        action: {
            title: 'Toggle Fog of War',
            fn: () => { this.opponentBoard.hideShips = !this.opponentBoard.hideShips; }
        }

    };

    private boards: Array<IAppGameBoard>;

    // tslint:disable-next-line: max-line-length
    private opponentFiresTriggered: BehaviorSubject<{coord: IAppCoordinate, state: IAppGameState}> = new BehaviorSubject<{coord: IAppCoordinate, state: IAppGameState}>(null);
    /**
     * Observable which allows subscription on isAuthenticated BehaviorSubject.
     */
    opponentFires: Observable<{coord: IAppCoordinate, state: IAppGameState}> = this.opponentFiresTriggered.asObservable();


    constructor() {
        this.boards = [
            this.playerBoard,
            this.opponentBoard
        ];

        this.initGame();
    }

    initGame(): void {
        this.boards.forEach(b => {
            b.coordinates = this.getGameBoardCoordinates();
            this.createShip(b.coordinates, 4);
            this.createShip(b.coordinates, 4);
            this.createShip(b.coordinates, 5);
        });
    }

    getGameBoards(cols: number = 2): Array<IAppGameBoard> {
        this.boards.forEach(b => b.cols = cols);
        return this.boards;
    }

    setHit(boardName: 'player' | 'opponent' = 'player', coord: IAppCoordinate): void {
        const board = boardName === 'player' && this.playerBoard || this.opponentBoard;
        const boardCoords = board.coordinates.find(c => c.x === coord.x && c.y === coord.y);
        boardCoords.isHit = true;
    }

    fireAt(boardName: 'player' | 'opponent' = 'player'): void {
        const board = boardName === 'player' && this.playerBoard || this.opponentBoard;
        let coord = null;
        const state: IAppGameState = {
            victory: this.opponentBoard.coordinates.filter(c => c.isShipPart && !c.isHit).length === 0,
            loss: false
        };
        if (!state.victory) {
            coord = this.createShot(board.coordinates);
            const boardCoords = board.coordinates.find(c => c.x === coord.x && c.y === coord.y);
            boardCoords.isHit = true;
            state.loss = this.playerBoard.coordinates.filter(c => c.isShipPart && !c.isHit).length === 0;
        }

        this.opponentFiresTriggered.next({ coord, state });
    }

    getGameBoardCoordinates(): Array<IAppCoordinate> {
        const coordinates: Array<IAppCoordinate> = [];
        for (let x = 0; x < this.maxLength; x++) {
            for (let y = 0; y < this.maxLength; y++) {
                coordinates.push({ x, y });
            }
        }
        return coordinates;
    }

    createShip(coordinates: Array<IAppCoordinate>, size: number): void {
        // 0 - X Axis
        // 1 - Y Axis
        const direction = this.randomNumber(0, 2);
        // get a random start pos
        const shipStartPosX = this.randomNumber(0, direction === 0 && this.maxLength - size || this.maxLength);
        const shipStartPosY = this.randomNumber(0, direction === 1 && this.maxLength - size || this.maxLength);
        console.log(direction, shipStartPosX, shipStartPosY);
        const shipCoords = coordinates.filter(c => {
            let result = c.x >= shipStartPosX && c.x < shipStartPosX + size && c.y === shipStartPosY;

            if (direction === 1) // :  && !c.isShipPart;
            {
                result = c.y >= shipStartPosY && c.y < shipStartPosY + size && c.x === shipStartPosX;
            }

            return result && !c.isShipPart;
        });

        if (shipCoords && shipCoords.length < size) {
            this.createShip(coordinates, size);
        } else {
            shipCoords.forEach(c => c.isShipPart = true);
        }
    }

    createShot(coordinates: Array<IAppCoordinate>): IAppCoordinate {
        let coords = {
            x: this.randomNumber(0, this.maxLength - 1),
            y: this.randomNumber(0, this.maxLength - 1),
            isHit: true
        } as IAppCoordinate;

        const hitsOnNewCoordinates = coordinates.filter(c => c.x === coords.x && c.y === coords.y && c.isHit);
        if (hitsOnNewCoordinates.length > 0) {
            coords = this.createShot(coordinates);
        }

        return coords;
    }

    private randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
