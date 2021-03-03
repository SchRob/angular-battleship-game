import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './app.navbar.component.html',
    styleUrls: ['./app.navbar.component.css']
})
export class AppNavbarComponent {
    @Input() title: string;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver) {}

}
