import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[isNom]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NomValidatorDirective, multi: true }]
})
export class NomValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let nomRegEx = /^[A-Z]+$/;
    let valid = nomRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isNom': null } : { 'isNom': true };
  }
}

@Directive({
  selector: '[isPrenom]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PrenomValidatorDirective, multi: true }]
})
export class PrenomValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let prenomRegEx = /^[A-ZÀ-ÿ][a-zà-ÿ]+$/;
    let valid = prenomRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isPrenom': null } : { 'isPrenom': true };
  }
}

@Directive({
  selector: '[isEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
    let valid = emailRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isEmail': null } : { 'isEmail': true };
  }
}

@Directive({
  selector: '[isTelephone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TelephoneValidatorDirective, multi: true }]
})
export class TelephoneValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let telephoneRegEx = /^([0-9]{2}.){4}[0-9]{2}$/;
    let valid = telephoneRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isTelephone': null } : { 'isTelephone': true };
  }
}

@Directive({
  selector: '[isAdresse]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AdresseValidatorDirective, multi: true }]
})
export class AdresseValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let adresseRegEx = /^[0-9]+[A-Za-zà-ÿ ']+$/;
    let valid = adresseRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isAdresse': null } : { 'isAdresse': true };
  }
}

@Directive({
  selector: '[isCode]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CodeValidatorDirective, multi: true }]
})
export class CodeValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let codeRegEx = /^(?:[0-8]\d|9[0-8])\d{3}$/;
    let valid = codeRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isCode': null } : { 'isCode': true };
  }
}

@Directive({
  selector: '[isVille]',
  providers: [{ provide: NG_VALIDATORS, useExisting: VilleValidatorDirective, multi: true }]
})
export class VilleValidatorDirective implements Validator {

  constructor() {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let codeRegEx = /^[A-ZÀ-ÿ][a-zà-ÿ]+$/;
    let valid = codeRegEx.test(control.value);
    return control.value < 1 || valid ? { 'isVille': null } : { 'isVille': true };
  }
}