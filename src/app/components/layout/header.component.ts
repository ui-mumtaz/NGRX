import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <mat-toolbar color="primary" style="height: 50px; padding: 0 16px;">
    <div fxLayoutAlign="start center" fxFlex="100%" fxHide.xs>
        <button mat-button routerLink="/user" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="selected">Users</button>
        <button mat-button routerLink="/post" routerLinkActive="selected">Posts</button>
      </div>
    </mat-toolbar>
  `,
    styles: [`
    .selected {
      background: #3c763d;
    }
  `]
})

export class HeaderComponent {

    constructor() {
    }
}
