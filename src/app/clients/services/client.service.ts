import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, Observable, tap } from 'rxjs';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private readonly API_URL = 'client-microservice-service/clients';

  constructor(private httpClient: HttpClient,
    private snackBar: MatSnackBar
    ) { }


  listClientsAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.API_URL}/all`)
    .pipe(
      first(),
      tap(clients=> console.log(clients))
    );
   }

   findClientById(id: string): Observable<Client>{
     return this.httpClient.get<Client>(`${this.API_URL}/${id}`);

   }

   registerClients(client: Client): Observable<Client>{
     return this.httpClient.post<Client>(`${this.API_URL}`, client);
   }


   updateClients(client: Client): Observable<Client> {
     return this.httpClient.put<Client>(`${this.API_URL}/${client.id}`, client);
   }


   deleteClients(id:string): Observable<Client> {
     return this.httpClient.delete<Client>(`${this.API_URL}/${id}`);
   }

   showMessage(msg: string): void {
     this.snackBar.open(msg, '',{
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition: "top"
     })
   }
}
