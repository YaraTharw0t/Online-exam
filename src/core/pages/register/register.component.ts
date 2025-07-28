import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-register',
  imports: [FormsModule,InputGroupModule,InputGroupAddonModule,InputTextModule,RouterLink,ButtonModule,RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

firstname: string | undefined;
lastname: string | undefined;
email: string | undefined;
password: string | undefined;
repassword: string | undefined;
    

}
