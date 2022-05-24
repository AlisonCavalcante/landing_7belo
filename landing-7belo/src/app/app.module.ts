import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormInscricaoComponent } from './components/form-inscricao/form-inscricao.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestemunhosComponent } from './components/testemunhos/testemunhos.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInscricaoComponent,
    HeadlineComponent,
    FooterComponent,
    TestemunhosComponent,
    CampoControlErroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
