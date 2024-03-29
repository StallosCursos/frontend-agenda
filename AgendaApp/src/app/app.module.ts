import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastComponent } from './components/toast/toast.component';
import { BearerInterceptor } from './interceptors/BearerInterceptor/bearer.interceptor';
import { NotAutorizedInterceptor } from './interceptors/NotAutorizedInterceptor/not-autorized.interceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AccountPageComponent,
    ToastComponent,
    HomePageComponent,
    SchedulePageComponent,
    CategoryPageComponent,
    ContactCardComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotAutorizedInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
