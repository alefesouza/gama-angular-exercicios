import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageItemComponent } from './language-item/language-item.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'languages', component: LanguageListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LanguageListComponent,
    LanguageItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
