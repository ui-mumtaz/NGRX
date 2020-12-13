import { Component } from '@angular/core';

@Component({
    selector: 'app-post',
    template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <button mat-raised-button color="primary">Add User</button>
    </div>
  `,
    styles: [`
        div {
            margin:10px 0;
        }
    `]
})
export class PostComponent {

}