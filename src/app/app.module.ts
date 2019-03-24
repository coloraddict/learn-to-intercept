import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material';

import { ErrorDialogService } from './error-dialog/errordialog.service';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true
    }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
