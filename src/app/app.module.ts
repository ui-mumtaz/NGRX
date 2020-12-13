import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DashboardComponent } from './components/layout/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/layout/header.component';
import { MaterialModule } from './material.module';
import { UsersComponent } from './containers/users.component';
import { PostComponent } from './containers/post.component';

import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';
import { UserListComponent } from './components/user-list.component';
import { UserCardComponent } from './components/user-card.component';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UsersComponent,
    PostComponent,
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
