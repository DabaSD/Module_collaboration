import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReunionComponent } from './reunion/reunion.component';
import { ListeReunionsComponent } from './liste-reunions/liste-reunions.component';


export const routes: Routes = [
    { path: 'sidenav', component:  SideNavComponent,},
    { path: 'fileUpload', component:  FileUploadComponent,},
    { path: 'reunion', component:  ReunionComponent,},
    { path: 'listeReunions', component:  ListeReunionsComponent,}

];
