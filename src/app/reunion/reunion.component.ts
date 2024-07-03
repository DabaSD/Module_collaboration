import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reunion',
  standalone: true,
  imports: [SideNavComponent, FormsModule, CommonModule],
  templateUrl: './reunion.component.html',
  styleUrl: './reunion.component.css'
})
export class ReunionComponent {
  users: string[] = ["Mame Diarra", "Saliou Fall", "Ibrahima Diop", "Abdou Mbacke", "Mouhamad Ba"];

  reunion = {
    date: '',
    time: '',
    type: '',
    link: '',
    location: '',
    attendees: '',
    onlineDetails: '',
    inPersonDetails: '',
    selectedAttendees: [] as string[], // Assurez-vous du type string[]
    attendeesText: ''
  };

  updateAttendeesText() {
    this.reunion.attendeesText = this.reunion.selectedAttendees.join(', ');
  }

  addAttendee(user: string) {
    if (!this.reunion.selectedAttendees.includes(user)) {
      this.reunion.selectedAttendees.push(user);
      this.updateAttendeesText();
    }
  }

  onSubmit() {
    if (this.reunion.type === 'online') {
      console.log('Réunion en ligne:', this.reunion);
    } else {
      console.log('Réunion en présentiel:', this.reunion);
    }
  }

}

