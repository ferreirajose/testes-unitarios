import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MessageService } from '../message.service';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent; // guardando a instancia do Alert
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;
  let servicesStub: any;

  beforeEach(async (() => {
    servicesStub = {
      getContent: () => of('you have been warned')
    };

    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ],
      providers: [
        { provide: MessageService, useValue: servicesStub}
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  }));


  it('Deve criar o component AlertButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('Deve existir a string `warn` no AlertButtonComponent ', () => {
  //   // jose é um propriedade declarada dentro do component AlertButtonComponent
  //   expect(component.jose).toContain('warn'); // procura dentro da propriedade component.jose se contem a string `warng`
  // });

  it('O valor da variavel severity deve ser maior que 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('Deve conter uma TAG H1 no AlertButtonComponent', () => {
    // procura por uma tag h1 que deve conter o texto 'Alert Button';
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('Deve validar o metodo toggle ', () => {
    // a variavel hiddenContent inicia como = true 
    expect(component.hiddenContent).toBeTruthy();
    component.toogle();
    // quando executar o metodo component.toogle() o valor se = false;
    expect(component.hiddenContent).toBeFalsy();
  });

  it('Deve retorna uma mensagem do Back End', () => {
    // a variavel jose é um Observable que ira retorna uma string
    component.jose.subscribe(val => {
      expect(val).toBeDefined(); // espera-se que o valor esteja definido, pronto para uso
      expect(val).toBe('you have been warned'); // que dever ser igual 'you have been warned'
    });
  });

});
