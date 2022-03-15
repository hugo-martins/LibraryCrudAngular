import { ClientService } from './../services/client.service';
import { Client } from './../model/client';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  client: Client;

  public clientForm: FormGroup;

  constructor(
    private clientService : ClientService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      'name': new FormControl(''),
      'age': new FormControl(''),
      'phone': new FormControl(''),
      'email': new FormControl(''),
      'sex': new FormControl(''),

  })
  }

  createClient(): void {
    const value = this.clientForm.value;

    this.clientService.registerClients(this.clientForm.value).subscribe(()=>{
    this.clientService.showMessage('Cliente Cadastrado!')
    this.router.navigate(['/clients']);
  })
}

cancel(): void{
  this.router.navigate(['/clients']);
}

onSubmit(): void{
  console.log(this.clientForm.value);
}

}
