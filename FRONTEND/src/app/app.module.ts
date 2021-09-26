import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NomValidatorDirective,PrenomValidatorDirective,EmailValidatorDirective,
  TelephoneValidatorDirective, AdresseValidatorDirective, CodeValidatorDirective,
  VilleValidatorDirective } from './form.directive';
import { FormPipe } from './form.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResumeComponent,
    HeaderComponent,
    FooterComponent,
    NomValidatorDirective,
    PrenomValidatorDirective,
    EmailValidatorDirective,
    TelephoneValidatorDirective,
    AdresseValidatorDirective,
    CodeValidatorDirective,
    VilleValidatorDirective,
    FormPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
