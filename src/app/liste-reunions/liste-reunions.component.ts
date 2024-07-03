import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';


@Component({
  selector: 'app-liste-reunions',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './liste-reunions.component.html',
  styleUrl: './liste-reunions.component.css'
})
export class ListeReunionsComponent {

}
