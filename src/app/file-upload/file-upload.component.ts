import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FileService } from '../services/file-service.service';
import { FilePreviewComponent } from '../file-preview/file-preview.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, SideNavComponent, FilePreviewComponent],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileUploadComponent {
  constructor(private fileService: FileService) {}

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (const file of Array.from(files)) {
      this.fileService.addFile(file);
    }
  }

  get uploadedFiles() {
    return this.fileService.getFiles();
  }

  removeFile(file: File) {
    this.fileService.removeFile(file);
  }

  // Méthode pour afficher les détails du fichier (exemple)
  viewFileDetails(file: File) {
    alert(`Nom du fichier : ${file.name}\nTaille : ${file.size} octets\nType : ${file.type}`);
    // Implémentez ici la logique pour afficher les détails du fichier selon vos besoins
  }

  
  // Méthode pour formater la taille du fichier en octets, ko, Mo, Go, etc.
  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}



