import { Component } from '@angular/core';
import { MainsidebarComponent } from './components/mainsidebar/mainsidebar.component';
import { MainnavbarComponent } from './components/mainnavbar/mainnavbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [MainsidebarComponent,MainnavbarComponent,RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent {

}
