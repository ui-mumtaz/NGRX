import { User } from './../models/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './../models/post';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-users',
    template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="30px">
      <user-list *ngIf="!this.loading && !this.error" [users]="this.users"></user-list>
      <mat-spinner *ngIf="this.loading"></mat-spinner>
      <!-- <button *ngIf="!this.loading && !this.error" mat-raised-button color="primary">Add User</button> -->
    </div>
    `,
    styles: [`
    div {
            margin:10px 0;
        }
    `]
})
export class UsersComponent implements OnInit, OnDestroy {

    posts: Post[] = [];
    users: User[] = []
    loading = false;
    error = false;
    isAlive = true;

    constructor(private apiServe: ApiService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.fetchData();
    }
    
    fetchData() {
        this.apiServe.getAllUser().subscribe(data => {
          this.users = data;
        })
    }
    ngOnDestroy() {
        this.isAlive = false;
    }
}