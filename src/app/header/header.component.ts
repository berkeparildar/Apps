import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import {CvViewComponent} from "../cv-view/cv-view.component";
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog, private router: Router, private renderer: Renderer2, private el: ElementRef) { }
  openCvModal(): void {
    const dialogConfig = {
      data: {
        cvPdfUrl: 'src/assets/cv.pdf' // Replace with the actual URL of your CV PDF
      },
      panelClass: 'custom-container',
      backdropClass: 'custom-modal'
    };
    this.dialog.open(CvViewComponent, dialogConfig);
  }
}
