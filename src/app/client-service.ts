import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class CLientService {
  apiUrl = "http://localhost:3000/client";
  
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl); // método Get do HTTP
  }

  save(client: Client): Observable<Client>{
    return this.http.post<Client>(this.apiUrl, client); // método POST do HTTP
  }

    delete(client: Client): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${client.id}`);
 }

 update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
}
}
