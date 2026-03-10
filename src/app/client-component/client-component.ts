import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css',
})
export class ClientComponent {
formGroupClient: FormGroup;

clients: Client[] = [];

  
  constructor(private formBuilder: FormBuilder) { //usa injeção de dependências para
  //utilizar o formbuilder dentro do constructor

  this.formGroupClient = formBuilder.group({ // constroi o objeto Product, de acordo com
  //sua interface já definida
    id: [''],
    name: [''],
    email: [''],
    phone: ['']
    });

  }

   save(){
    this.clients.push(this.formGroupClient.value); // salva o produto no array de produtos
    this.formGroupClient.reset(); // reseta o formulário depois de salvar
    }
}
