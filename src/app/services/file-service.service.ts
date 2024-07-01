import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files: File[] = [];

  addFile(file: File) {
    this.files.push(file);
  }

  removeFile(file: File) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }

  getFiles() {
    return this.files;
  }
}
