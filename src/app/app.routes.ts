import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


export const routes: Routes = [
    { path: 'sidenav', component:  SideNavComponent,},
    { path: 'fileUpload', component:  FileUploadComponent,}

];
