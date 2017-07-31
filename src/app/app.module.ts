import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TitleComponent } from './components/title/title.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TitleComponent,
    HeroListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
