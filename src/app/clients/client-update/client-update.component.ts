import { ClientService } from './../services/client.service';
import { Client } from './../model/client';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  public clientFormUpdate: FormGroup;
  client: Client;
  loading: Boolean = true;

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.clientService.findClientById(<string>id).subscribe((client)=>{
      this.loading = false;
      this.client = client;
      this.clientFormUpdate = this.fb.group({
        'id': new FormControl(client.id),
        'name': new FormControl(client.name),
        'age': new FormControl(client.age),
        'phone': new FormControl(client.phone),
        'email': new FormControl(client.email),
        'sex': new FormControl(client.sex),

      })}
     )
  }
  updateClient(): void {
    const clientUpdate = this.clientFormUpdate.value;
    clientUpdate.id = this.client.id;
    this.clientService.updateClients(clientUpdate)
   .subscribe(()=>{
      this.clientService.showMessage('Dados do cliente atualizado!')
      this.router.navigate(['/clients']);
      this.clientService.listClientsAll();
      }
    )}


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  cancel(): void{
    this.router.navigate(['/clients']);
  }

}
