import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AppGameService } from './app.game.service';
import { AppGameStateDialogComponent } from './game-state-dialog/app.game-state-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.dashboard.component.html',
  styleUrls: ['./app.dashboard.component.css']
})
export class AppDashboardComponent {
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            let result = this.appGameService.getGameBoards();
            if (matches) {
                return result;
            }
            result = this.appGameService.getGameBoards(1);
            return result;
        })
    );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private appGameService: AppGameService,
        public matDialog: MatDialog
    ) {
        this.appGameService.opponentFires.subscribe(data => {
            if (!data) {
                return;
            }

            this.matDialog.open(AppGameStateDialogComponent, { data });
        });
    }
}
