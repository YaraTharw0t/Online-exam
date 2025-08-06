import { Component } from '@angular/core';
import { NavbarblankComponent } from "./components/navbarblank/navbarblank.component";
import { SidebarblankComponent } from "./components/sidebarblank/sidebarblank.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blanklayout',
  imports: [NavbarblankComponent, SidebarblankComponent, RouterOutlet],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.scss'
})
export class BlanklayoutComponent {

}
