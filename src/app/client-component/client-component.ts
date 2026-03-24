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
  isEditing: boolean = false;
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

   delete(client: Client) {
    this.service.delete(client).subscribe(
      {
        next: () => {
          this.clients.update(clients => clients.filter(p => p.id != client.id));
        }
      }
    )
  }

  onClickUpdate(client: Client) {
     this.formGroupClient.setValue(client);
     this.isEditing = true;
  }

     update() {
this.service.update(this.formGroupClient.value).subscribe(
        {
          next: json => {
            this.clients.update(clients => clients.map(p=> p.id === json.id ? json : p));
            this.isEditing = false;
            this.formGroupClient.reset();
          }
        }
      )
  }

}
