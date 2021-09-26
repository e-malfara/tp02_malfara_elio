import { NomValidatorDirective,PrenomValidatorDirective,EmailValidatorDirective,
        TelephoneValidatorDirective, AdresseValidatorDirective, CodeValidatorDirective,
        VilleValidatorDirective } from './form.directive';

describe('NomValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new NomValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('PrenomValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new PrenomValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('EmailValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EmailValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('TelephoneValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new TelephoneValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('AdresseValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new AdresseValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('CodeValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new CodeValidatorDirective();
    expect(directive).toBeTruthy();
  });
});

describe('VilleValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new VilleValidatorDirective();
    expect(directive).toBeTruthy();
  });
});