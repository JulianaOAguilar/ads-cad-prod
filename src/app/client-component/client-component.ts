import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { CLientService } from '../client-service';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css',
})
export class ClientComponent implements OnInit {

formGroupClient: FormGroup;
clients = signal<Client[]>([]);

  
  constructor(private formBuilder: FormBuilder, private service: CLientService) { 

  this.formGroupClient = formBuilder.group({ 
    id: [''],
    name: [''],
    email: [''],
    phone: ['']
    });

  }
  ngOnInit(): void {
   this.service.getAllClients().subscribe(
      { next: json => this.clients.set(json) }
    );
  }

  save() {

    this.service.save(this.formGroupClient.value).subscribe(
      {
        next: json => {
          this.clients.update(clients => [...clients, json]); // atualiza o Signal
          this.formGroupClient.reset(); // reseta o form
        }
      }
    )
  }

}
