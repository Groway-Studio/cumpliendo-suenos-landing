import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatInputModule } from '@angular/material/input';

// components
import { AppComponent } from './app.component';
import { NabvarComponent } from '../app/components/shared/navbar/nabvar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Routes
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './components/shared/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NabvarComponent,
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    ProjectsComponent,
    SubscriptionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
