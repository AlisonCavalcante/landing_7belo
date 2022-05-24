import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormInscricaoComponent } from './components/form-inscricao/form-inscricao.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestemunhosComponent } from './components/testemunhos/testemunhos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInscricaoComponent,
    HeadlineComponent,
    FooterComponent,
    TestemunhosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
