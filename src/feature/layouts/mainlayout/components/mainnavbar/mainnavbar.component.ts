import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-mainnavbar',
    imports: [InputIcon, IconField, InputTextModule, FormsModule,ButtonModule],
  templateUrl: './mainnavbar.component.html',
  styleUrl: './mainnavbar.component.scss'
})
export class MainnavbarComponent {

}
