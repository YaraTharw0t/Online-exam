import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';






@Component({
  selector: 'app-login',
  imports: [FormsModule,InputGroupModule,InputGroupAddonModule,InputTextModule,RouterLink,ButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    email: string | undefined;
    number: string | undefined;




}
