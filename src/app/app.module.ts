import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task-todo/task-todo.component';
import { TaskDoneComponent } from './task-done/task-done.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
