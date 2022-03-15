import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';


@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss']
})
export class ClientDeleteComponent implements OnInit {

  client: Client;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.findClientById(<string> id).subscribe((client)=>{
    this.client = client;
    });
  }


  deleteClient(): void {
    this.clientService.deleteClients(<string>this.client.id).subscribe(()=>{
      this.clientService.showMessage('Cliente Deletado!')
      this.router.navigate(['/clients']);
    })
  }


  cancel(): void{
    this.router.navigate(['/clients']);
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

}
