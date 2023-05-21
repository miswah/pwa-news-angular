import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Component Imports
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { HotTopicsComponent } from './hot-topics/hot-topics.component';
import { NewsCardComponent } from './news-card/news-card.component';

//Mat Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    SidebarMenuComponent,
    NewsLayoutComponent,
    HotTopicsComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
