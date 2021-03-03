import { IAppCoordinate } from './app.coordinate.interface';


export interface IAppGameBoard {
    id: 'player' | 'opponent';
    title?: string;
    cols: number;
    rows: number;
    hideShips?: boolean;
    coordinates?: Array<IAppCoordinate>;
    action?: {
        title: string;
        fn(): void;
    }
}
