import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FileService } from '../services/file-service.service';
import { FilePreviewComponent } from '../file-preview/file-preview.component';
import * as pdfjsLib from 'pdfjs-dist';


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
  pdfSrc: any;

  onFileSelected(event: any) {
    console.log('Files selected');
    const files: FileList = event.target.files;
    for (const file of Array.from(files)) {
      this.fileService.addFile(file);
    }
  }

  get uploadedFiles() {
    return this.fileService.getFiles();
  }

  removeFile(file: File) {
    console.log('Removing file', file.name);
    this.fileService.removeFile(file);
  }

 /* viewFileDetails(file: File) {
    console.log('View file details', file.name);
    if (file.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        console.log('File loaded');
        this.pdfSrc = e.target.result;
        this.renderPDF(this.pdfSrc);
      };
      fileReader.readAsArrayBuffer(file);
    }
  }

  renderPDF(data: ArrayBuffer) {
    console.log('Rendering PDF');
    const loadingTask = pdfjsLib.getDocument({ data });
    loadingTask.promise.then(pdf => {
      console.log('PDF loaded');
      pdf.getPage(1).then(page => {
        console.log('Page loaded');
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas: any = document.getElementById('pdfCanvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext).promise.then(() => {
          console.log('Page rendered');
        });
      });
    });
  }*/

  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
