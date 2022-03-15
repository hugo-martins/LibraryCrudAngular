import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { Client } from './../model/client';
import { ClientService } from './../services/client.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$:Observable<Client[]>
  client: Client;

  displayedColumns = ['name', 'age', 'email', 'phone', 'sex',  'action'];


  constructor(
    private router: Router,
    private clientService : ClientService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
     this.clients$ = this.clientService.listClientsAll()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao listar Clientes');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  navigateToClientCreate(): void {
    this.router.navigate(['clients/client-create']);
  }


}
