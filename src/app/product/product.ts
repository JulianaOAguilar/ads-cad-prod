import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

   formGroupProduct: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: ['Glauco Todesco'],
      description: ['FATEC'],
      price: [0]
    });

  }
}
