import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './game/app.dashboard.component';
import { AppGameBoardFieldComponent } from './game/game-board-field/app.game-board-field.component';
import { AppGameBoardComponent } from './game/game-board/app.game-board.component';
import { AppGameStateDialogComponent } from './game/game-state-dialog/app.game-state-dialog.component';
import { AppNavbarComponent } from './navbar/app.navbar.component';
import { AppFilterPipe } from './shared/pipes/app.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppGameBoardComponent,
    AppDashboardComponent,
    AppFilterPipe,
    AppGameBoardFieldComponent,
    AppGameStateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
