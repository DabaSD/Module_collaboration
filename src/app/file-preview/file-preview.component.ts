import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-file-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.css']
})
export class FilePreviewComponent {
  @Input() file!: File;
  @Output() remove = new EventEmitter<File>();

  onRemove() {
    this.remove.emit(this.file);
  }
}
