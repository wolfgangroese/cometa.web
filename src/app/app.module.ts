import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './features/tasks/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './shell/header/header.component';
import { HomeComponent } from "./features/home/home.component";
import { NewsComponent } from "./features/news/news.component";
import { TaskDetailComponent } from "./features/tasks/task-detail/task-detail.component";
import { SearchComponent } from "./features/search/search.component";
import { AccountComponent } from "./features/account/account.component";
import { MenubarModule } from "primeng/menubar";
import { FormsModule} from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { NewTaskComponent } from "./features/tasks/new-task/new-task.component";
import { AuthService } from "./services/auth.service";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    TaskListComponent,
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    TaskDetailComponent,
    SearchComponent,
    AccountComponent,
    MenubarModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    NewTaskComponent,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,

  ],
  providers: [
    TaskService,
    AuthService,
    ],
})
export class AppModule { }
