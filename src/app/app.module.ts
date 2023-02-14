import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { OutLibraryBooksComponent } from './out-library-books/out-library-books.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';


const routing : Routes = [
  {path: "", component: HomePageComponent},
  {path: "AddBook", component: AddBookComponent},
  {path: "LibraryBooks", component: LibraryBooksComponent},
  {path: "OutLibraryBooks", component: OutLibraryBooksComponent},
  {path: "Settings", component: SettingsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddBookComponent,
    LibraryBooksComponent,
    OutLibraryBooksComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgToastModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
